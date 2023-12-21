async function afficherAlter() {
    const reponse = await fetch("https://labonnealternance.apprentissage.beta.gouv.fr/api-docs/swagger.json");
    const alter = await reponse.json();
    console.log(alter);
  }

