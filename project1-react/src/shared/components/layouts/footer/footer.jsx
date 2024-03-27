import styles from './footer.module.css';
export function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <p className={styles.footerText}>Developed with <ion-icon name="heart"></ion-icon>&copy;2023</p>
            </footer>
        </>
    )
}