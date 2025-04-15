function searchProfile() {
    const username = document.getElementById("searchBar").value;
    const errorArea = document.getElementById("errorArea");
    const url = `https://api.github.com/users/${username}`;

    if (username.replaceAll(" ", "") == "") {
        errorArea.innerHTML = `<div class="alert alert-danger" role="alert">
            Invalid search. <i>Null</i> values can't be found.
        </div>`;

        return;
    }
    else {
        errorArea.innerHTML = "";
    }

    let profileJson = fetch(url).then( (response) => {
        return response.json();
    });

    console.log(profileJson.id);
}