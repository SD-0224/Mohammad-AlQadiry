import { getTopicsAsync } from "../../services/topics.service.js";
import { updateTopicsList ,initSearchInput} from "../../pages/home/home.view.js";
import { startLoading, finishLoading } from "../../helpers/loading/loading.js";

let currentSearch = '';
let currentFilter = '';
let currentSort = 'title';
let searchTimeout ; 


document.addEventListener('DOMContentLoaded', async () => {
    const topics = await loadTopics(); 
    updateTopicsList(topics);
    initSearchInput(handleSearchInput); 
});

function handleSearchInput(event) {
    currentSearch = event.target.value;
    clearTimeout(searchTimeout); 
    searchTimeout = setTimeout(async () => {
        const topics = await loadTopics(); 
        updateTopicsList(topics); 
    }, 300); 
}



async function loadTopics() {
    try {

        startLoading();
        const topics = await getTopicsAsync(currentSearch);
        finishLoading();

        return topics;
      
    } catch (error) {
        console.error("Failed to load topics:", error);
        finishLoading();
        
    }
}


loadTopics();

