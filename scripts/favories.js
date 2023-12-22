const url = "./data/dataJob.json";

const target = document.querySelector(".container");

async function fetchApiData(favories) {
  const response = await fetch(url);
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
  </section>`);

};
  const favIcons = document.querySelectorAll('.fa-heart')
  favIcons.forEach(icon => {
    icon.addEventListener('click', (event)=> {
      const valueToDelete = event.target.id;
      favories = favories.filter(element => element !== `${valueToDelete}`);
      localStorage.setItem('fav', favories.join(','));
      location.reload(true);
    });
  });
};


window.addEventListener("load", (even) => {
  let favories = [];
  if (localStorage.getItem('fav').split(',')[0] === '' ) {
     favories = [];
  }
  else {
     favories = localStorage.getItem('fav').split(',');
  };
  console.log(favories);
  fetchApiData(favories);
  // localStorage.removeItem("fav");
  });
