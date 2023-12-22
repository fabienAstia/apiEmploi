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
      <a href="infos-map.html?id=${favories[index]}">${results[favories[index]].title}</a>
      </div>
      <div class="companyInfo">${results[favories[index]].job.description.slice(0,200)}...</div>
      <div class="companyInfo">${results[favories[index]].place.fullAddress}</div>
    </div>
    <div class="logo-fav">
      <i class="fa-solid fa-heart" id="${favories[index]}"></i>
    </div>
  </section>`)

}
  // const favIcons = document.querySelectorAll('.fa-heart')
  // favIcons.forEach(icon => {
  //   icon.addEventListener('click', (event)=> {
  //     const valueToDelete = event.target.id
  //     const keys = Object.keys(favories)
  //     keys.forEach(key => {
  //       if (favories[key] === valueToDelete) {
  //         delete favories[key]
  //         console.log(favories)
  //         localStorage.setItem('fav', JSON.stringify(favories))
  //         // let favories = JSON.parse(localStorage.getItem('fav')) || [];
  //       }
  //     })
  //   })
  // })
}


window.addEventListener("load", (even) => {
  let favories = JSON.parse(localStorage.getItem('fav')) || [];
  fetchApiData(favories)
  // localStorage.removeItem("fav");
  });
