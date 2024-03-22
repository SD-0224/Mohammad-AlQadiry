import React from 'react';

export const renderStars = (rating) => {
    const starsCount = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStarsCount = 5 - Math.ceil(rating);

    return (
        <>
            {[...Array(starsCount)].map((_, i) => <ion-icon key={`star-${i}`} name="star"></ion-icon>)}
            {hasHalfStar && <ion-icon name="star-half"></ion-icon>}
            {[...Array(emptyStarsCount)].map((_, i) => <ion-icon key={`empty-${i}`} name="star-outline"></ion-icon>)}
        </>
    );
};
