const url = "./data/dataJob.json"

const target = document.querySelector(".container")


async function fetchApiData(favories) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept':'application/json',
    }
  });
  const data = await response.json();
  const results = data.peJobs.results;

  console.log(typeof(favories))

  for (let index = 0; index < favories.length; index++) {

    console.log(results[favories[index]])
    target.insertAdjacentHTML("afterend",
    ` <section>
    <div class="info">
      <div class="jobInfo">
      <a href="infos-map.html?id=${favories[index]}">${results[favories[index]].title}</a>
      </div>
      <div class="companyInfo">${results[favories[index]].job.description.slice(0,200)}...</div>
      <div class="companyInfo">${results[favories[index]].place.fullAddress}</div>
    </div>
    <div class="logo-fav">
      <i class="fa-regular fa-heart" id="${index}"></i>
    </div>
  </section>`)
  }
}


window.addEventListener("load", (even) => {
  let favories = JSON.parse(localStorage.getItem('fav'));
  console.log(favories)
  fetchApiData(favories)
  // localStorage.removeItem("fav");

  });
