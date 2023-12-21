const url = "https://labonnealternance.apprentissage.beta.gouv.fr/api/v1/jobs?romes=F1603%2CI1308&caller=contact%40domaine%20nom_de_societe&latitude=48.845&longitude=2.3752&radius=30&insee=75056"

// const url = "https://data.ademe.fr/data-fair/api/v1/datasets/base-carboner/"


async function fetchApiData() {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept':'application/json',
      // 'mode':'no-cors',
      // 'Origin':'*'
    }
  });
  const data = await response.json();
  console.log(data);
}

window.addEventListener("load", (event) => {
  fetchApiData();
})
