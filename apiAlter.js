// async function afficherAlter() {
//     const reponse = await fetch("https://labonnealternance.apprentissage.beta.gouv.fr/api-docs/swagger.json");
//     const alter = await reponse.json();
//     console.log(alter);
//   }

  async function fetchAlter(){
    //console.log("bravo tu sais capturer un event click");
    const response = await fetch("https://recherche-entreprises.api.gouv.fr/search?q=la%20poste&page=1&per_page=1");
    const json = await response.json(); //fonction pour retourner le body au format json
    //json[0] == {"name":{"common": "Christmas Island"}} , soit un objet
    const firstAlter = json.paths["/search"].get.description;
    console.log(json);
    //
    const li = `<li>${firstAlter}</li>`;
    target.innerHTML = li;
    target.innerHTML = li;
  }



window.addEventListener("load", (event) => {
    fetchAlter();
});   //écouter event


const target = document.getElementById("target");
//parcours le tableau