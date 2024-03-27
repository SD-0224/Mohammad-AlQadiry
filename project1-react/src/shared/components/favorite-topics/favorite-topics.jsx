import React, { useState } from 'react';
import styles from './favorite-topics.module.css'; // Adjust the import path as needed
import { useFavoriteTopics } from '../../contexts/favorite-topics.context';

export function FavoriteTopics() {
    const { showFavoriteTopics } = useFavoriteTopics();
    return (
        <div id="favCanvas" className={`${styles.offCanvas} ${'container'} ${showFavoriteTopics ? styles.active : ''}`}>
            <h2>My Favorites Topics</h2>
            <div id="favList" className={styles.cardsList}>
                <div className={styles.cardItem}>
                    <a href="#" className={styles.cardItemFavImgWrapper}>
                        <img src="/assets/images/javascript.jpg" alt="HTML" />
                    </a>
                    <a className={styles.topicName} href="#">HTML</a>
                    <div className={styles.stars}>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                </div>



            </div>
        </div >
    );
}
