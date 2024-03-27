import { localStorageService } from '../../../shared/helpers/localstorage.service';
const FAVORITES_KEY = 'favorite-topics';
export const favoriteTopicsService = {
    addToFavorites(topic) {
        let favorites = localStorageService.getItem(FAVORITES_KEY, []);
        if (!favorites.some(f => f.id === topic.id)) {
            favorites.push(topic);
            localStorageService.setItem(FAVORITES_KEY, favorites);
        }
    },

    removeFromFavorites(topicId) {
        let favorites = localStorageService.getItem(FAVORITES_KEY, []);
        favorites = favorites.filter(favorite => favorite.id !== topicId);
        localStorageService.setItem(FAVORITES_KEY, favorites);
    },

    getAllFavorites() {
        return localStorageService.getItem(FAVORITES_KEY, []);
    },

    isFavoriteTopic(topicId) {
        const favorites = this.getAllFavorites();
        if (!favorites) { return false; }
        return favorites.some(topic => topic.id === topicId);
    }
};

