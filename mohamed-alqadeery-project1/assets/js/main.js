const toggleDarkButton = document.getElementById("toggle-dark-mode");
const toggleFavButton = document.getElementById("toggle-favorites");
const offCanvas = document.querySelector(".off-canvas");

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function toggleFavorites() {
  if (!offCanvas.classList.contains("active")) {
    toggleFavButton.querySelector("ion-icon").classList.add("heart-active");
    toggleFavButton.querySelector(".btn-text").classList.add("heart-active");
  } else {
    toggleFavButton.querySelector("ion-icon").classList.remove("heart-active");
    toggleFavButton.querySelector(".btn-text").classList.remove("heart-active");
  }
  offCanvas.classList.toggle("active");
}

toggleDarkButton.addEventListener("click", (e) => {
  e.preventDefault();
  toggleDarkMode();
});

toggleFavButton.addEventListener("click", (e) => {
  e.preventDefault();
  toggleFavorites();
});

//to hide canvas when clicking on it
offCanvas.addEventListener("click", (e) => {
  let isCardItem = e.target.classList.contains("cards-item");
  console.log(e.target);
  if (!isCardItem) {
    toggleFavorites();
  }
});
