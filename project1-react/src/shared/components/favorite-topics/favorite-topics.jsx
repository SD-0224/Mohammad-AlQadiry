import React, { useState } from 'react';
import styles from './favorite-topics.module.css'; // Adjust the import path as needed

export function FavoriteTopics() {

    return (
        <div id="favCanvas" className={`${styles.offCanvas} ${'container'}`}>
            <h2>My Favorites Topics</h2>
            <div id="favList" className={styles.cardsList}>
                {topics.map((topic, index) => (
                    <div key={index} className={styles.cardItem}>
                        <a href="#" className={styles.cardItemFavImgWrapper}>
                            <img src={topic.imageUrl} alt={topic.name} />
                        </a>
                        <a className={styles.topicName} href="#">{topic.name}</a>
                        <div className={styles.stars}>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
