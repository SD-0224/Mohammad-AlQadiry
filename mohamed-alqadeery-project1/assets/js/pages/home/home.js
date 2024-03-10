import { GetTopicsAsync } from "../../services/topics.service.js";
import { updateTopicsList } from "../../pages/home/home.view.js";

async function loadTopics() {
    try {
        const topics = await GetTopicsAsync();
        updateTopicsList(topics); 
    } catch (error) {
        console.error("Failed to load topics:", error);
        
    }
}


export  {
    loadTopics
};