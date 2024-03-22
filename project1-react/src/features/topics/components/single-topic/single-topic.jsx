import { Link } from "react-router-dom";
import { renderStars } from "../../../../shared/helpers/helpers";
import "./single-topic.module.css";

export function SingleTopic({ topic }) {
    const stars = renderStars(topic.rating);

    return (
        <>
            <div className="col-12 col-md-3">
                <div className="card topicItem">
                    <Link href={`details/id=${topic.id}`}>
                        <div className="topicItemImgWrapper">
                            <img src={`assets/images/${topic.image}`} alt={`${topic.topic} image`} className="cardImgTop" />
                        </div>
                    </Link>
                    <div className="cardBody py-2">
                        <p className="topicCategory">{topic.category}</p>
                        <a href={`details.html?id=${topic.id}`} className="topicName">{topic.topic}</a>
                        <div className="stars">
                            {stars}
                            <p className="grey">Author: {topic.name}</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}