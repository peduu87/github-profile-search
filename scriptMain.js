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

    profileName.innerHTML = profileJson.name;
    username.innerHTML = profileJson.login;
    followers.innerHTML = profileJson.followers;
    sinceField.innerHTML = getProfileSinceField(profileJson);
    location.innerHTML = getProfileLocation(profileJson);
    profilePage.href = profileJson.html_url;
    avatar.src = profileJson.avatar_url;
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