import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { FavoriteTopics } from '../../favorite-topics/favorite-topics';

export function AppLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />

            <FavoriteTopics />

        </>
    )
}