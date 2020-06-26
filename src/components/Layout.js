import React from "react";
import {Helmet} from "react-helmet";
import NavBar from './NavBar';
import Footer from './Footer';




export default function Layout(props) {
    return (
        <>
            <Helmet>
                <title>{`TrumanRx - ${props.title}`}</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Montserrat:wght@200;400;500;700;900&family=Open+Sans&display=swap" rel="stylesheet" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>

            <main>
                <NavBar />
                <div className="app-body">{props.children}</div>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}