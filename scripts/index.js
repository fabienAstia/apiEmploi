const target = document.querySelector(".container");

const url = "./data/dataJob.json";

async function fetchApiData(favories) {
  const response = await fetch(url);
  const data = await response.json();
  const results = data.peJobs.results;

  for (let index = 0; index < results.length; index++) {

    if (favories.includes(`${index}`)) {
    target.insertAdjacentHTML("afterend",
    `<section>
      <div class="info">
        <div class="jobInfo">
        <a href="infos-map.html?id=${index}">${results[index].title}</a>
        </div>
        <div class="companyInfo">${results[index].job.description.slice(0,200)}...</div>
        <div class="companyInfo">${results[index].place.fullAddress}</div>
      </div>
      <div class="logo-fav">
        <i class="fa-solid fa-heart" id="${index}"></i>
      </div>
    </section>`);
    }
    else {
    target.insertAdjacentHTML("afterend",
    `<section>
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
    };

  }
  const allHearts = document.querySelectorAll(".fa-heart")
  allHearts.forEach(heart => {
    heart.addEventListener("click", (event) => {

      if (favories.includes(event.target.id)) {
        favories = favories.filter(element => element !== `${event.target.id}`);
        localStorage.setItem("fav", favories.join(','));
        favories = localStorage.getItem("fav").split(',');
      }
      else {
        favories.push(event.target.id);
        localStorage.setItem("fav", favories.join(','));
        favories = localStorage.getItem("fav").split(',');
      }
      console.log(favories);
      document.location.reload(true);
      // TODO Reload without loosing scroll
    });
  });
};

window.addEventListener("load", (event) => {

  // localStorage.removeItem("fav");

  let favories = [];
  if (localStorage.getItem('fav') === null) {
    favories = [];
  }
  else {
    favories = localStorage.getItem('fav').split(',');
  };
  console.log(favories);
  fetchApiData(favories);
})
