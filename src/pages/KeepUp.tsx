import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const KeepUp = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <div className="container mx-auto px-4 py-16 flex-grow">
                <h1 className="text-4xl font-bold mb-8 text-center">Keep Up Page</h1>
                <p>Content for Keep Up page goes here</p>
            </div>
            <Footer />
        </div>
    );
}