import { getTopicsAsync } from "../../services/topics.service.js";
import { updateTopicsList ,onSearchInput,onPageIsLoaded,initCategoriesFilters,onFilterOptionIsSelected,
    initSortOptions, onSortOptionIsSelected} from "../../pages/home/home.view.js";
import { startLoading, finishLoading } from "../../helpers/loading/loading.js";

let currentSearch = '';
let currentFilter = 'all';
let searchTimeout ; 
let topics = [];
let filteredTopics = [];
let sortOptions = ['title','author'];
let currentSelecedSort = 'title';



async function handleOnPageIsLoaded(){
    topics = await loadTopics(); 
    sortTopics(currentSelecedSort);

    const categories = topics.map(topic => topic.category).filter(( category, index, mappedArray) => mappedArray.indexOf(category) === index);
    initCategoriesFilters(categories);

    updateTopicsList(topics);

    onSearchInput(handleSearchInput); 
   onFilterOptionIsSelected(handleFilterOptionIsSelected);

    initSortOptions(sortOptions,currentSelecedSort);
    onSortOptionIsSelected(handleOnSortOptionIsSelected);
   
}


function handleSearchInput(event) {
    currentSearch = event.target.value;
    clearTimeout(searchTimeout); 
    searchTimeout = setTimeout(async () => {
        topics = await loadTopics(); 
        updateTopicsList(topics); 
    }, 300); 
}

function handleFilterOptionIsSelected(event){
    let selectedFilter = event.target.value;
    console.log(selectedFilter);
    currentFilter = selectedFilter;
    filteredTopics = selectedFilter == 'all' ? topics : topics.filter(topic => topic.category === selectedFilter);
    updateTopicsList(filteredTopics);
}

function handleOnSortOptionIsSelected(event){
    let selectedSortOption = event.target.value;
    console.log(selectedSortOption);
    currentSelecedSort = selectedSortOption;
   ;
    updateTopicsList( sortTopics(currentSelecedSort));
    
}


function sortTopics( sortOption) {
    var topicsToBeSort = currentFilter == 'all' ? topics : filteredTopics;
    return topicsToBeSort.sort((a, b) => {
        if (sortOption === 'title') {
            return a.topic.localeCompare(b.topic);
        } else if (sortOption === 'author') {
            return a.name.localeCompare(b.name);
        }
        return 0;
    });
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

