import { Navbar } from '../components/ui';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />{' '}
        </>
    );
}

export default MyApp;
