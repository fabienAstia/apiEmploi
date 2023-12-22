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

  for (let index = 0; index < favories.length; index++) {
    target.insertAdjacentHTML("afterend",
    ` <section>
    <div class="info">
      <div class="jobInfo">
      <a href="infos-map.html?id=${index}">${results[index].title}</a>
      </div>
      <div class="companyInfo">${results[index].job.description.slice(0,200)}...</div>
      <div class="companyInfo">${results[index].place.fullAddress}</div>
    </div>
    <div class="logo-fav">
      <i class="fa-regular fa-heart" id="${index}"></i>
    </div>
  </section>`)
  }
}


window.addEventListener("load", (even) => {
  let favories = localStorage.getItem('fav');
  console.log(favories)
  fetchApiData(favories)
  });
