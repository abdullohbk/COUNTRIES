let requestURL = "https://restcountries.com/v2/all";
let wrapper = document.querySelector(".wrapper");
let darkBtn = document.querySelector("#darkBtn");
const data = fetch(requestURL);

// data
//   .then((responce) => responce.json())
//   .then((result) => console.log(result))
//   .catch((err) => console.log("err"))
//   .finally(() => console.log('task done'));
function getData(request) {
  fetch(request)
    .then((response) => response.json())
    .then((result) => renderData(result))
    .catch((err) => console.log(err))
    .finally(() => console.log("done"));
}

getData(requestURL);

function renderData(data) {
  if (data.length) {
    data.forEach((el) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
       <img src="${el.flags.svg}" alt="smthimg" />
        <div class="card-body">
          <h2>Country: ${
            el.name.length > 9 ? el.name.substring(0, 9) + "..." : el.name
          }</h2>
          <p>Population: ${el.population}</p>
          <p>Region: ${el.region}</p>
          <button>Read more...</button>
        </div>
      `;
      wrapper.appendChild(card);
    });
  } else {
    wrapper.innerHTML = `NOT FOUND`;
  }
}


let isDarkMode = false;

darkBtn.onclick = function () {
  if (isDarkMode == false) {
    document.body.style.transition = "all 0.2s linear";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document
      .querySelectorAll(".title")
      .forEach((el) => (el.style.color = "white"));
  } else {
    document.body.style.transition = "all 0.2s linear";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document
      .querySelectorAll(".title")
      .forEach((el) => (el.style.color = "black"));
  }
  isDarkMode = !isDarkMode;
};