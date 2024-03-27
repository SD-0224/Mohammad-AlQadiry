// FavoriteTopicsContext.js
import React, { createContext, useState, useContext } from 'react';

const FavoriteTopicsContext = createContext();

export const FavoriteTopicsProvider = ({ children }) => {
    const [showFavoriteTopics, setShowFavoriteTopics] = useState(false);
    const toggleFavoriteTopics = () => {

        setShowFavoriteTopics(prevState => !prevState);
    };

    return (
        <FavoriteTopicsContext.Provider value={{ showFavoriteTopics, toggleFavoriteTopics }}>
            {children}
        </FavoriteTopicsContext.Provider>
    );
};





export function useFavoriteTopics() {
    return useContext(FavoriteTopicsContext);
}
