const target = document.querySelector(".container")

const url = "./data/data.json"

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

  results.forEach(result => {
      target.insertAdjacentHTML("beforeend", ` <section>
      <div class="info">
        <div class="jobInfo">${result.title}</div>
        <div class="companyInfo">${result.job.description.slice(0,200)}...</div>
        <div class="companyInfo">${result.place.fullAddress}</div>
      </div>
      <div class="logo-fav">
        <i class="fa-solid fa-heart"></i>
        <i class="fa-regular fa-heart"></i>
      </div>
    </section>`)
  });

}

window.addEventListener("load", (event) => {
  fetchApiData();
})
