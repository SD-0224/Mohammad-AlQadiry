import { useFavoriteTopics } from '../../../contexts/favorite-topics.context';
import { useDarkModeContext } from '../../../contexts/darkmode.context';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
export function Header() {
    const { toggleFavoriteTopics, showFavoriteTopics } = useFavoriteTopics();
    const { isDarkMode, toggleDarkMode } = useDarkModeContext();

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.logo}><Link to="/">Web Topics</Link></div>
                    <div className={styles.headerActions}>

                        {
                            isDarkMode ?

                                <button onClick={() => toggleDarkMode()} id="toggle-dark-mode" className={styles.btnHeader}> <ion-icon name="sunny-outline"
                                    aria-label="apply light mode"></ion-icon><span className={styles.btnText}>
                                        Light
                                        Mode
                                    </span></button>
                                :

                                <button id="toggle-dark-mode" onClick={() => toggleDarkMode()} className={styles.btnHeader}> <ion-icon name="moon-outline"
                                    aria-label="apply dark mode"></ion-icon><span className={styles.btnText}>
                                        Dark
                                        Mode
                                    </span></button>

                        }


                        <button id="toggle-favorites" onClick={toggleFavoriteTopics} className={styles.btnHeader}>

                            <ion-icon name="heart-outline"
                                className={`${showFavoriteTopics ? styles.heartActive : ''}`}
                            ></ion-icon>

                            <span className={`${styles.btnText} ${showFavoriteTopics ? styles.heartActive : ''}`}>
                                Favorites
                            </span></button>
                    </div>
                </div>
            </header>
        </>
    )
}