const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

const target = document.querySelector(".container");
const addMap = document.querySelector(".map")

const url = "./data/dataJob.json"

async function fetchApiData() {
  const response = await fetch(url)
  const data = await response.json()
  const results = data.peJobs.results
  console.log(results[3].place.latitude);

  target.insertAdjacentHTML("afterBegin",
  ` <section id="${id}">
  <div class="info">
  <div class="jobInfo">
  <a href="infos-map.html?id=${id}">${results[id].title}</a>
  </div>
  <div class="companyInfo">${results[id].job.description.slice(0,200)}...</div>
  <div class="companyInfo">${results[id].place.fullAddress}</div>
  </div>
  <div class="logo-fav">
  <i class="fa-solid fa-heart"></i>
  <i class="fa-regular fa-heart"></i>
  </div>
  </section>`
  )
  addMap.insertAdjacentHTML("beforeend",
  `<iframe
  width="600"
  height="450"
  style="border:0"
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCXH4bZNmIDwYr29j2nJvzzLCTiS2yo4M0
    &q=${results[id].place.latitude}%2C${results[id].place.longitude}">
  </iframe>`
  )

};


  window.addEventListener("load", (event) => {
    fetchApiData();
  })
