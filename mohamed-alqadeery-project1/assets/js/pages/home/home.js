import { GetTopicsAsync } from "../../services/topics.service.js";
import { updateTopicsList } from "../../pages/home/home.view.js";
import { startLoading, finishLoading } from "../../helpers/loading/loading.js";




async function loadTopics() {
    try {

        startLoading();
        const topics = await GetTopicsAsync();
        finishLoading();
        updateTopicsList(topics); 
    } catch (error) {
        console.error("Failed to load topics:", error);
        finishLoading();
        
    }
}


export  {
    loadTopics
};