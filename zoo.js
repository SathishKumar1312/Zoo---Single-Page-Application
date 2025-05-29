let content = document.getElementById("content");
let animalName = document.getElementById("name");
let species = document.getElementById("species");
let lifespan = document.getElementById("lifespan");
let habitat = document.getElementById("habitat");
let diet = document.getElementById("diet");
let fact = document.getElementById("fact");
let home = document.getElementById("home");
let container = document.getElementById("container");

let infoArr;
async function loadData() {
  let res = await fetch("./info.json");
  let data = await res.json();
  infoArr = data.animals;
  imageHandler();
}

loadData();
let images = document.querySelectorAll("img");
images.forEach((img) => {
  setTimeout(() => {
    img.classList.add("loaded"); // Adds fade-in effect
  }, 100);
});

function imageHandler() {
  images.forEach((el, i) => {
    el.addEventListener("click", (e) => {
      content.style.display = "block";

      images.forEach((img) => (img.style.display = "none"));
      e.target.classList.add("size");
      e.target.style.display = "block";

      setTimeout(() => {
        e.target.classList.add("loaded"); // Adds fade-in effect
      }, 100);
      container.classList.add("container");

      let animal = infoArr[i];
      animalName.innerText = animal.name;
      species.innerHTML = "<b>Species : </b>" + animal.species;
      lifespan.innerHTML = "<b>Lifespan : </b>" + animal.lifespan;
      habitat.innerHTML = "<b>Habitat : </b>" + animal.habitat;
      diet.innerHTML = "<b>Diet : </b>" + animal.diet;
      fact.innerHTML = "<b>Fact : </b>" + animal.interesting_fact;
    });
  });
}

function createImage() {
  container.classList.remove("container");

  images.forEach((img) => {
    img.style.display = "grid";
    img.classList.remove("size");
    setTimeout(() => {
      img.classList.add("loaded"); // Adds fade-in effect
    }, 100);
  });
}
home.addEventListener("click", (e) => {
  content.style.display = "none";
  createImage();
  imageHandler();
});
