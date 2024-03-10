

function renderTopicItem(topic) {
    const starsCount = Math.floor(topic.rating);
    const halfStar = topic.rating % 1 ? '<ion-icon name="star-half"></ion-icon>' : '';
    const emptyStarsCount = 5 - Math.ceil(topic.rating);
    const stars = '<ion-icon name="star"></ion-icon>'.repeat(starsCount) +
                  halfStar +
                  '<ion-icon name="star-outline"></ion-icon>'.repeat(emptyStarsCount);
    
    return `
    <div class="col-12 col-md-3">
        <div class="card topic-item">
            <a href="details.html?id=${topic.id}">
            <div class="topic-item__img-wrapper">
            <img src="assets/images/${topic.image}" alt="${topic.topic} image" class="card-img-top" />
            </div>
            </a>
            <div class="card-body py-2">
                <p class="topic-category">${topic.category}</p>
                <a href="details.html?id=${topic.id}" class="topic-name">${topic.topic}</a>
                <div class="stars">
                    ${stars}
                    <p class="grey">Author:${topic.name}</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

export function updateTopicsList(topics) {
    const topicsSection = document.querySelector('.topics-section');
    const topicsListElement = topicsSection.querySelector('#topic-list');
    const topicsTitle = topicsSection.querySelector('#topic-title');
    topicsTitle.textContent = `"${topics.length}" Web Topics Found`;
    const topicsHTML = topics.map(t=>renderTopicItem(t)).join('');
    topicsListElement.innerHTML = topicsHTML;
}