const target = document.querySelector(".container")
console.log(target)

const url = "./data/dataJob.json"

async function fetchApiData() {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept':'application/json',
    }
  });
  const data = await response.json();
  const results = data.peJobs.results;
  console.log(results)

  for (let index = 0; index < results.length; index++) {
    target.insertAdjacentHTML("afterend",
    ` <section id="${index}">
    <div class="info">
      <div class="jobInfo">
      <a href="infos-map.html?id=${index}">${results[index].title}</a>
      </div>
      <div class="companyInfo">${results[index].job.description.slice(0,200)}...</div>
      <div class="companyInfo">${results[index].place.fullAddress}</div>
    </div>
    <div class="logo-fav">
      <i class="fa-solid fa-heart"></i>
      <i class="fa-regular fa-heart"></i>
    </div>
  </section>`)
  }
}

window.addEventListener("load", (event) => {
  fetchApiData();
})
