import {getTopicByIdAsync} from '../../services/topics.service.js';
import{renderDetailsPage} from './details.view.js';

const id = new URLSearchParams(window.location.search).get('id');
if(!id) {
    window.location.href = 'index.html';
}

const singleTopic = await getTopicByIdAsync(id);


renderDetailsPage(singleTopic);