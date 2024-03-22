import { Header } from '../header/header';
import { Footer } from '../footer/footer';

export function AppLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />

        </>
    )
}