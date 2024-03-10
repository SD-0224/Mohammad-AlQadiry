export function renderDetailsPage(topic){
    document.querySelector('.topic-details h5').textContent = topic.category;
    document.querySelector('.topic-details h2').textContent = topic.topic;
    document.querySelector('.topic-details p').textContent = topic.description;
    document.querySelector('.topic-card-image img').setAttribute('src', `assets/images/${topic.image}`);
    document.querySelector('.topic-card-image .author-link').textContent = topic.name;
    const starsContainer = document.querySelector('.topic-details .stars');
    starsContainer.innerHTML = generateStarsHTML(topic.rating);
    
    const subTopicsContainer = document.querySelector('.sub-topics .card-body');
    subTopicsContainer.innerHTML = topic.subtopics.map(subtopic => `<li class="d-flex align-items-center p-4">
        <ion-icon class="checkmark-circle" name="checkmark-circle-outline"></ion-icon>
        <span>${subtopic}</span>
    </li>`).join('');
}

function generateStarsHTML(rating) {
    const starsCount = Math.floor(rating);
    const halfStar = rating % 1 ? '<ion-icon name="star-half"></ion-icon>' : '';
    const emptyStarsCount = 5 - Math.ceil(rating);
    const stars = '<ion-icon name="star"></ion-icon>'.repeat(starsCount) +
                  halfStar +
                  '<ion-icon name="star-outline"></ion-icon>'.repeat(emptyStarsCount);

    return stars;
}
