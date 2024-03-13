import { getAllFavorites } from './services/topics.service.js';
const toggleDarkButton = document.getElementById("toggle-dark-mode");
const toggleFavButton = document.getElementById("toggle-favorites");
const offCanvas = document.querySelector(".off-canvas");
var favListDiv = document.querySelector("#fav-list");

var favTopics = getAllFavorites();
var favTopicsHtML = favTopics.map(renderFavTopic).join("");

function renderFavTopic(topic) {
  const starsCount = Math.floor(topic.rating);
  const halfStar = topic.rating % 1 ? '<ion-icon name="star-half"></ion-icon>' : '';
  const emptyStarsCount = 5 - Math.ceil(topic.rating);
  const stars = '<ion-icon name="star"></ion-icon>'.repeat(starsCount) +
    halfStar +
    '<ion-icon name="star-outline"></ion-icon>'.repeat(emptyStarsCount);
  return `
           <div class="card-item">
               <a href="details.html?id=${topic.id}" class="card-item-fav__img-wrapper"> <img src="assets/images/${topic.image}" alt="${topic.topic}" /></a>
                  <a class="topic-name" href="details.html?id=${topic.id}">${topic.topic}</a>
                     <div class="stars">
                         ${stars}
              
                      </div>
            </div>
                    `

}




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
  favListDiv.innerHTML = favTopicsHtML;
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

document.addEventListener('favoriteChanged', function () {
  console.log('Favorite status changed!');
  favTopics = getAllFavorites();
  favTopicsHtML = favTopics.map(renderFavTopic).join("");
  favListDiv.innerHTML = favTopicsHtML;
});



