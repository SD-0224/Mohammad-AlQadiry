import { getTopicsAsync } from "../../services/topics.service.js";
import { updateTopicsList ,onSearchInput,onPageIsLoaded,initCategoriesFilters,onFilterOptionIsSelected} from "../../pages/home/home.view.js";
import { startLoading, finishLoading } from "../../helpers/loading/loading.js";

let currentSearch = '';
let currentFilter = '';
let currentSort = 'title';
let searchTimeout ; 
let topics = [];
let filteredTopics = [];



async function handleOnPageIsLoaded(){
    topics = await loadTopics(); 
    const categories = topics.map(topic => topic.category).filter(( category, index, mappedArray) => mappedArray.indexOf(category) === index);
    initCategoriesFilters(categories);
    updateTopicsList(topics);
    onSearchInput(handleSearchInput); 
   onFilterOptionIsSelected(handleFilterOptionIsSelected);
}


function handleSearchInput(event) {
    currentSearch = event.target.value;
    clearTimeout(searchTimeout); 
    searchTimeout = setTimeout(async () => {
        topics = await loadTopics(); 
        updateTopicsList(currentTopics); 
    }, 300); 
}

function handleFilterOptionIsSelected(event){
    let selectedFilter = event.target.value;
    console.log(selectedFilter);
    currentFilter = selectedFilter;
    filteredTopics = selectedFilter == 'all' ? topics : topics.filter(topic => topic.category === selectedFilter);
    updateTopicsList(filteredTopics);
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

//starting page

onPageIsLoaded(handleOnPageIsLoaded);

