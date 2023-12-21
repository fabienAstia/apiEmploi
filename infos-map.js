const target = document.querySelector(".container");
console.log(target);

const url = "./data/dataJob.json"

async function fetchApiData() {
    const response = await fetch(url)
    const data = await response.json()
    const results = data.peJobs.results
    console.log(results[3].company);

    target.insertAdjacentHTML("afterBegin",
    ` <section id="${3}">
    <div class="info">
      <div class="jobInfo">
      <a href="infos-map.html?id=${3}">${results[3].title}</a>
      </div>
      <div class="companyInfo">${results[3].job.description.slice(0,200)}...</div>
      <div class="companyInfo">${results[3].place.fullAddress}</div>
    </div>
    <div class="logo-fav">
      <i class="fa-solid fa-heart"></i>
      <i class="fa-regular fa-heart"></i>
    </div>
  </section>`
  )};














window.addEventListener("load", (event) => {
    fetchApiData();
  })
  