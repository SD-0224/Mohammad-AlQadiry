// FavoriteTopicsContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { favoriteTopicsService } from '../../features/topics/services/favorite-topics.service';

const FavoriteTopicsContext = createContext();

export const FavoriteTopicsProvider = ({ children }) => {
    const [showFavoriteTopics, setShowFavoriteTopics] = useState(false);
    const [favoriteTopics, setFavoriteTopics] = useState([]);
    const toggleFavoriteTopics = () => {

        setShowFavoriteTopics(prevState => !prevState);
    };

    useEffect(() => {
        setFavoriteTopics(favoriteTopicsService.getAllFavorites());
    }, [])

    const addToFavorites = (topic) => {
        favoriteTopicsService.addToFavorites(topic);
        setFavoriteTopics(prev => [...prev, topic]);
    };

    const removeFromFavorites = (topicId) => {
        favoriteTopicsService.removeFromFavorites(topicId);
        setFavoriteTopics(prev => prev.filter(t => t.id !== topicId));
    };

    const isFavoriteTopic = (topicId) => {

        return [...favoriteTopics].some(t => t.id === topicId);
    };

    return (
        <FavoriteTopicsContext.Provider value={{
            showFavoriteTopics, toggleFavoriteTopics,
            favoriteTopics, addToFavorites, removeFromFavorites, isFavoriteTopic
        }}>
            {children}
        </FavoriteTopicsContext.Provider>
    );
};





export function useFavoriteTopics() {
    return useContext(FavoriteTopicsContext);
}
