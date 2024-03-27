import React, { useState } from 'react';
import styles from './favorite-topics.module.css'; // Adjust the import path as needed
import { useFavoriteTopics } from '../../contexts/favorite-topics.context';
import { renderStars } from "../../helpers/helpers";
import { Link } from "react-router-dom"


export function FavoriteTopics() {
    const { showFavoriteTopics, favoriteTopics } = useFavoriteTopics();

    return (
        <div id="favCanvas" className={`${styles.offCanvas} ${'container'} ${showFavoriteTopics ? styles.active : ''}`}>
            <h2>My Favorites Topics</h2>
            <div id="favList" className={styles.cardsList}>
                {
                    favoriteTopics.length < 1 ? <p>You don't have any favorite topics yet</p> :

                        favoriteTopics.map(topic =>
                            <div className={styles.cardItem}>
                                <Link to={`/details/${topic.id}`} className={styles.cardItemFavImgWrapper}>
                                    <img src={`/assets/images/${topic.image}`} alt={`${topic.topic} image`} />
                                </Link>
                                <Link className={styles.topicName} to={`/details/${topic.id}`}>{topic.name}</Link>
                                <div className={styles.stars}>
                                    {renderStars(topic.rating)}
                                </div>
                            </div>
                        )
                }



            </div>
        </div >
    );
}
