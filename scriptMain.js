let searchHistory = [];

async function searchProfile() {
    const search = document.getElementById("searchBar").value;
    const errorArea = document.getElementById("errorArea");
    const url = `https://api.github.com/users/${search}`;

    if (search.replaceAll(" ", "") == "") {
        errorArea.innerHTML = `<div class="alert alert-danger" role="alert">
            Invalid search. <i>Null</i> values can't be found.
        </div>`;

        return;
    }
    else {
        errorArea.innerHTML = "";
    }
    
    let profileJson;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            errorArea.innerHTML = `<div class="alert alert-danger" role="alert">
                Profile not found.
            </div>`;

            return;
        }
        else {
            errorArea.innerHTML = "";
        }

        profileJson = await response.json();
        
        // await fetch(url).then((response) => response.json()).then((result) => result);
        // await (await fetch(url)).json();
    }
    catch (e) {
        console.error(e.message);
    }
    
    const profileName = document.getElementById("profileName");
    const username = document.getElementById("profileUsername");
    const followers = document.getElementById("profileFollowers");
    const sinceField = document.getElementById("profileSinceField");
    const location = document.getElementById("profileLocation");
    const profilePage = document.getElementById("profilePage");
    const avatar = document.getElementById("profileAvatar");
    const profileCard = document.getElementById("profileCard");

    profileName.innerHTML = profileJson.name;
    username.innerHTML = profileJson.login;
    followers.innerHTML = profileJson.followers;
    sinceField.innerHTML = getProfileSinceField(profileJson);
    location.innerHTML = getProfileLocation(profileJson);
    profilePage.href = profileJson.html_url;
    avatar.src = profileJson.avatar_url;

    addToHistory(profileJson);
}

function getProfileSinceField(pJson) {
    const createdAt = pJson.created_at;

    return `${createdAt.substring(5, 7)}/${createdAt.substring(8, 10)}/${createdAt.substring(0, 4)}`;
}

function getProfileLocation(pJson) {
    if (pJson.location != null) {
        return pJson.location;
    }
    else {
        return "";
    }
}

function copyProfileLink() {
    const profilePageLink = document.getElementById("profilePage").href;

    navigator.clipboard.writeText(profilePageLink);
}

function addToHistory(pJson) {
    for (let i = 0; i < searchHistory.length; i++) {
        if (searchHistory[i].username == pJson.login) {
            searchHistory.splice(i, 1);
        }
    }

    searchHistory.push({
            username: pJson.login,
            avatar: pJson.avatar_url,
    });

    if (searchHistory.length > 5) {
        searchHistory.splice(0, 1);
    }

    updateHistory();
}

function updateHistory() {
    const historyDiv = document.getElementById("historyDiv");

    historyDiv.innerHTML = "";

    for (let el of searchHistory) {
        historyDiv.insertAdjacentHTML("afterbegin", (
            `<div class="text-center" style="width: 90px; height: 125px; word-wrap: break-word;">
                    <div class="bg-secondary-subtle rounded-circle" style="width: 75px; height: 75px; justify-self: center; overflow: hidden;">
                        <img src="${el.avatar}" class="img-fluid" alt="Profile avatar">
                    </div>
                    <div>
                        ${el.username}
                    </div>
                </div>`
        ))
    }
}