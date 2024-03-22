import { Header } from '../header/header';
import { Footer } from '../footer/footer';

export function AppLayout({ children }) {
    return (
        <>
            <Header />
            <main className="container">
                {children}
            </main>
            <Footer />

        </>
    )
}