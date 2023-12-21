const compagnies = [0];

async function fetchCompagnies(){
    const response = await fetch("https://recherche-entreprises.api.gouv.fr/docs/swagger.json");
    const json = await response.json();
    // json[0] == {"name": {"common": "Christmas Island"}}
    const firstCompagny = json.paths["/search"].get.description;
    console.log(json);
    //
        const li = `<li>${firstCompagny}</li>`;
        target.innerHTML = li;
        console.log(li);
    }


window.addEventListener("load", (event) => {
    fetchCompagnies();
});


const target = document.getElementById("target");