import { Link } from "react-router-dom";
import { renderStars } from "../../../../shared/helpers/helpers";
import styles from "./single-topic.module.css";

export function SingleTopic({ topic }) {
    const stars = renderStars(topic.rating);

    return (
        <>

            <div className={`${styles.topicItem} card`}>
                <Link to={`details/${topic.id}`}>
                    <div className={styles.topicItemImgWrapper}>
                        <img src={`assets/images/${topic.image}`} alt={`${topic.topic} image`} className="card-img-top" />
                    </div>
                </Link>
                <div className="card-body py-2">
                    <p className={styles.topicCategory}>{topic.category}</p>
                    <Link to={`details/${topic.id}`} className={styles.topicName}>{topic.topic}</Link>
                    <div className="stars">
                        {stars}
                        <p className={styles.grey}>Author: {topic.name}</p>
                    </div>
                </div>
            </div>

        </>
    );
}