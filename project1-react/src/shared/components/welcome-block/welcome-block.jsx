import styles from './welcome-block.module.css';
export function WelcomeBlock() {
    return (
        <section className={styles.blockDesign}>
            <div className={styles.primaryTriangle}></div>
            <div className={styles.secondaryTriangle}></div>
            <div className="mt-4">
                <h2 className="title mb-0">Welcome to our website!</h2>
                <p className="subtitle">We have a new design that's fresh, modern, and easy to use.</p>
            </div>
        </section >
    )
}
