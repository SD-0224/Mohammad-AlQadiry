import { getTopicsAsync } from "../../services/topics.service.js";
import { updateTopicsList } from "../../pages/home/home.view.js";
import { startLoading, finishLoading } from "../../helpers/loading/loading.js";

const topics = await loadTopics();

updateTopicsList(topics);


async function loadTopics() {
    try {

        startLoading();
        const topics = await getTopicsAsync();
        finishLoading();

        return topics;
      
    } catch (error) {
        console.error("Failed to load topics:", error);
        finishLoading();
        
    }
}


loadTopics();

