// async function afficherAlter() {
//     const reponse = await fetch("https://labonnealternance.apprentissage.beta.gouv.fr/api-docs/swagger.json");
//     const alter = await reponse.json();
//     console.log(alter);
//   }

async function fetchComp(){
    //console.log("bravo tu sais capturer un event click");
    const response = await fetch("https://recherche-entreprises.api.gouv.fr/search?categorie_entreprise=GE&code_postal=75020&section_activite_principale=A%2C%20B%2C%20C%2C%20D%2C%20E%2C%20F%2C%20G&page=2&per_page=25");
    const json = await response.json(); //fonction pour retourner le body au format json
    //json[0] == {"name":{"common": "Christmas Island"}} , soit un objet
    // const firstComp = json.results[0].nom_complet;
    // console.log(firstComp);
    
    for (let i=0; i<json.results.length; i++){
      const company = json.results[i].nom_complet;
      let adresse = json.results[i].siege.geo_adresse;
      //const newLine = `</br></br>`;   
      if (adresse === null){
        adresse = json.results[i].siege.adresse
        }
      const section = `<section><div class="info"><div class= "jobInfo">${company}</br>${adresse}</div></div></section>`;
      //const li = `<li>${company}</li>`;

      target.innerHTML += section;

     // target.innerHTML += adresse;
      //target.innerHTML += newLine;
    }
}


window.addEventListener("load", (event) => {
  fetchComp();
});   //écouter event


const target = document.getElementById("target2");
//parcours le tableau


// https://recherche-entreprises.api.gouv.fr/search?categorie_entreprise=GE&code_postal=75020&section_activite_principale=A%2C%20B%2C%20C%2C%20D%2C%20E%2C%20F%2C%20G&page=2&per_page=25