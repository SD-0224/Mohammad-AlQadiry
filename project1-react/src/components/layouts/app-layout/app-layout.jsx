import styles from './app-layout.module.css';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

export function AppLayout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />

        </>
    )
}