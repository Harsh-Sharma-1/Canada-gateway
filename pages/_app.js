import { Navbar } from '../components/ui';
import Footer from '../components/ui/footer';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
