import {localStorageService} from '../services/localstorage.service.js';
const baseUrl = 'https://tap-web-1.herokuapp.com';

const FAVORITES_KEY = 'favorite-topics';

async function getTopicsAsync(searchPhrase=''){

    const url = new URL(`${baseUrl}/topics/list`);
    if(searchPhrase){
        url.searchParams.set('phrase', searchPhrase);
    }
    const response = await fetch(url);
    if(!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }2

    return await response.json();
    
}

async function getTopicByIdAsync(id){
    const response = await fetch(`${baseUrl}/topics/details/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
}


function addToFavorites(topic) {
    console.log('adddddddddd');
    let favorites = localStorageService.getItem(FAVORITES_KEY, []);
    console.log(topic,favorites);
    if (!favorites.some(f => f.id == topic.id)) {
        favorites.push(topic);
        localStorageService.setItem(FAVORITES_KEY, favorites);
    }
}
function removeFromFavorites(topicId) {
    console.log('reeeeeeeeeee')
    let favorites = localStorageService.getItem(FAVORITES_KEY, []);
    favorites = favorites.filter(favorite => favorite.id != topicId);
    localStorageService.setItem(FAVORITES_KEY, favorites);
}

function getAllFavorites() {
    return localStorageService.getItem(FAVORITES_KEY, []);
}

function isFavoriteTopic(topicId) {
    const favorites = getAllFavorites(); 
    console.log(favorites);
    if(!favorites){return false;}
   
    return favorites.some(topic => topic.id == topicId);
}

export {getTopicsAsync, getTopicByIdAsync, addToFavorites,
     removeFromFavorites, getAllFavorites, isFavoriteTopic};