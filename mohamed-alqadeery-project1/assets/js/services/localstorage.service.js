const localStorageService = {
    setItem(key, value) {
        try {
            const serializedValue = JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
        } catch (err) {
           
        }
    },

    getItem(key, defaultValue = null) { 
        try {
            const serializedValue = localStorage.getItem(key);
            if (serializedValue === null) {
                return defaultValue; 
            }
            return JSON.parse(serializedValue);
        } catch (err) {
            console.error("Error getting item from local storage", err);
            return defaultValue; 
        }
    },

    removeItem(key) {
        try {
            localStorage.removeItem(key);
        } catch (err) {
            console.error("Error removing item from local storage", err);
        }
    },

    clear() {
        try {
            localStorage.clear();
        } catch (err) {
            console.error("Error clearing local storage", err);
        }
    }
};

export { localStorageService};
