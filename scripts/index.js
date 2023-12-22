const target = document.querySelector(".container")
let favories = []

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

  for (let index = 0; index < results.length; index++) {
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
  const allHearts = document.querySelectorAll(".fa-heart")
  allHearts.forEach(heart => {
    heart.addEventListener("click", (event) => {
      favories.push(event.target.id)
      console.log(typeof(favories))
      localStorage.setItem("fav", JSON.stringify(favories));
      console.log(localStorage.getItem('fav'))
    })
  })
}

{/* <i class="fa-solid fa-heart"></i> */}


window.addEventListener("load", (event) => {
  fetchApiData();
  favories = JSON.parse(localStorage.getItem('fav')) || []
})
