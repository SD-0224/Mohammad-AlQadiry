import { useState, useContext, createContext, useEffect } from "react";

const DarkModeContext = createContext();
const DARK_MODE_KEY = 'is-dark-mode';


export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const isDarkMode = localStorage.getItem(DARK_MODE_KEY);
        return isDarkMode === 'true' ? true : false
    });

    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);

        localStorage.setItem(DARK_MODE_KEY, isDarkMode);
    }, [isDarkMode])

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    }

    return (
        <DarkModeContext.Provider value={{
            isDarkMode, toggleDarkMode
        }}>
            {children}
        </DarkModeContext.Provider>
    )



}


export function useDarkModeContext() {
    return useContext(DarkModeContext);
}