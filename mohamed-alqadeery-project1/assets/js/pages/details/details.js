import { getTopicByIdAsync } from '../../services/topics.service.js';
import { onPageIsLoaded, renderDetailsPage } from './details.view.js';
import { startLoading, finishLoading } from "../../helpers/loading/loading.js";
import { addToFavorites, removeFromFavorites, isFavoriteTopic } from '../../services/topics.service.js';

var topic;
var isFavorite;


const id = new URLSearchParams(window.location.search).get('id');

async function init() {
    if (!id) {
        window.location.href = 'index.html';
        return;
    }

    startLoading();
    try {
        topic = await getTopicByIdAsync(id);
        isFavorite = isFavoriteTopic(id);

        renderDetailsPage(topic, isFavorite, handleFavoriteClick);

    } catch (error) {
        console.error(error);

    } finally {
        finishLoading();
    }
}

function handleFavoriteClick() {

    if (isFavorite) {
        removeFromFavorites(topic.id);
        isFavorite = false;

    } else {
        addToFavorites(topic);
        isFavorite = true;

    }
    document.dispatchEvent(new CustomEvent('favoriteChanged', {
        bubbles: true,
        cancelable: true
    }));
    renderDetailsPage(topic, isFavorite, handleFavoriteClick);

}

onPageIsLoaded(init);



