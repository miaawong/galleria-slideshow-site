let id = window.localStorage.getItem("id");
const modal = document.querySelector(".slideshow");

fetch("./data.json")
  .then(res => res.json())
  .then(result => {
    let imagesDiv = document.querySelector(".slides");
    for (let i = 0; i < result.length; i++) {
      let div = document.createElement("div");
      div.classList.add("title-img");
      let painting = document.createElement("img");
      painting.src = result[i].images.hero.large;
      painting.style.display = "none";
      painting.id = i;
      painting.classList.add("slide");
      let title;
      div.appendChild(painting);
      imagesDiv.appendChild(div);
    }
  });

const showModal = () => {
  modal.style.display = "block";
  document.getElementById(`${id}`).style.display = "block";
};

let slideIndex = parseInt(id);
const showSlides = n => {
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (n === -1) {
    slides[14].style.display = "block";
    slideIndex = 14;
  } else if (n === 15) {
    slides[0].style.display = "block";
    slideIndex = 0;
  } else {
    slides[n].style.display = "block";
    slideIndex = n;
  }
};
const forward = document.querySelector("#forward-btn");
forward.addEventListener("click", () => {
  showSlides((slideIndex += 1));
});
const back = document.querySelector("#back-btn");
back.addEventListener("click", () => {
  showSlides(slideIndex - 1);
  console.log(slideIndex);
});

const closeModal = () => {
  modal.style.display = "none";
  window.location.href = "./index.html";
};
