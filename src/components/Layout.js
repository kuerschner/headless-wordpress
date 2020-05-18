import Head from "next/head";
// import ReactGA from 'react-ga';
import NavBar from './NavBar';
import Footer from './Footer';

// ReactGA.initialize('UA-157140327-1');
// ReactGA.pageview(window.location.pathname + window.location.search);


export default function Layout(props) {
    return (
        <>
            <Head>
                <title>{`TrumanRx - ${props.title}`}</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Montserrat:wght@200;400;500;700;900&family=Open+Sans&display=swap" rel="stylesheet" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main>
                <NavBar />
                {props.children}
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}