import {getTopicByIdAsync} from '../../services/topics.service.js';
import{renderDetailsPage} from './details.view.js';
import { startLoading, finishLoading } from "../../helpers/loading/loading.js";

const id = new URLSearchParams(window.location.search).get('id');
if(!id) {
    window.location.href = 'index.html';
}

async function loadSingleTopic(){
    startLoading();
  let topic=  await getTopicByIdAsync(id);
    finishLoading()

    return topic;

}
const singleTopic =await  loadSingleTopic();

renderDetailsPage(singleTopic);