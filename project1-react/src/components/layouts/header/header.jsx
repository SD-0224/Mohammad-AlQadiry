import styles from './header.module.css';
export function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.logo}><a href="#">Web Topics</a></div>
                    <div className={styles.headerActions}>
                        <button id="toggle-dark-mode" className={styles.btnHeader}> <ion-icon name="moon-outline"
                            aria-label="apply dark mode"></ion-icon><span className={styles.btnText}>
                                Dark
                                Mode
                            </span></button>
                        <button id="toggle-favorites" className={styles.btnHeader}>
                            <ion-icon name="heart-outline" aria-label="favorites list"></ion-icon><span className={styles.btnText}>
                                Favorites
                            </span></button>
                    </div>
                </div>
            </header>
        </>
    )
}