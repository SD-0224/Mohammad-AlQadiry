import { useEffect, useState } from "react";
import { WelcomeBlock } from "../../shared/components/welcome-block/welcome-block";
import { useParams } from "react-router-dom";
import styles from "./details.module.css";
import { renderStars } from "../../shared/helpers/helpers";
import { getTopicById } from "../../features/topics/services/topics.service";
import { LoadingSpinner } from "../../shared/components/loading-spinner/loading-spinner";
import { useFavoriteTopics } from "../../shared/contexts/favorite-topics.context";

export function Details() {
    const [topic, setTopic] = useState(null);
    const { id } = useParams();
    const { addToFavorites, removeFromFavorites, isFavoriteTopic } = useFavoriteTopics();


    useEffect(() => {

        getTopicById(id)
            .then(data => {
                setTopic(data);



            })
            .catch(error => {
                console.error("Error in fetching topic:", error);
            });

    }, [id])

    if (!topic) {
        return <LoadingSpinner label={"Loading topic details..."} />
    }


    return (
        <>
            <WelcomeBlock />
            <main>
                <section className={`${styles.topicAbout} ${styles.containerXlg}`}>
                    <div className={styles.topicDetails}>
                        <h5 className={styles.colorSecondary}>{topic.category}</h5>
                        <h2>{topic.topic}</h2>
                        <div className="stars">
                            {
                                renderStars(topic.rating)
                            }
                        </div>
                        <p>{topic.description}</p>
                    </div>

                    <div className={styles.topicCardImage}>
                        <img src={`/assets/images/${topic.image}`} alt={`${topic.topic} image`} />
                        <div className="p1">
                            <span className="space-sm-g">
                                <span className="bold">HTML by</span> <a className={styles.authorLink} href="#">{topic.name}</a>
                            </span>

                            <div className={styles.addToFavorite}>
                                <p>Interested about this topic?</p>
                                {
                                    isFavoriteTopic(topic.id) ?
                                        <button onClick={() => removeFromFavorites(topic.id)} className={styles.btnFav}>
                                            <span className={styles.favText}>Remove From Favorites</span>
                                            <ion-icon name="heart-sharp" aria-label="Remove from favorites"></ion-icon>
                                        </button>

                                        :
                                        <button onClick={() => addToFavorites(topic)} className={styles.btnFav}>
                                            <span className={styles.favText}>Add To Favorites</span>
                                            <ion-icon name="heart-outline" aria-label="Add to favorites"></ion-icon>
                                        </button>


                                }
                                <span className={styles.lightGrey}>Unlimited Credits</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`${styles.subTopics} ${styles.containerXlg}`}>
                    <div className={styles.listCard}>
                        <h2 className={styles.cardTitle}>{topic.topic} Sub Topics</h2>
                        <ul className={`${styles.cardBody} ps-0`}>
                            {
                                topic.subtopics.map((sub, index) => <li key={`${sub}-${index}`} className="d-flex align-items-center p-4">
                                    <ion-icon className="checkmark-circle" name="checkmark-circle-outline"></ion-icon>
                                    <span>{sub}</span>
                                </li>)
                            }
                        </ul>
                    </div>
                </section>
            </main>


        </>
    )
}