import React from "react";
import "./styles.css";

const Footer = props => {
    return (
        <div className="footerContainer container-fluid">
            <div className="desktopFooter row d-flex justify-content-center">
                <div className="col-12 col-md-10">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-3">
                            &copy; Tr<span className="accentedU">u</span>man Rx 2020
                        </div>
                        <div className="col-12 col-sm-12 col-md-3">
                            <a className="footerLink d-block" href="">Disclaimer</a>
                            <a className="footerLink d-block" href="">FAQ</a>
                            <a className="footerLink" href="mailto:info@trumanrx.com">info@trumanrx.com</a>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3">
                            <a className="footerLink d-block" href="/privacy-policy">Privacy Policy</a>
                            <a className="footerLink d-block" href="">Terms & Conditions</a>
                            <a className="footerLink d-block" href="">Telehealth Consent</a>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3">

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-10 py-4 text-center">
                    <p>Trūman is a digital men’s health platform that provides informational and administrative services only. The content on Trūman’s platform is not medical advice. Trūman-affiliated providers are independently owned and operated and are solely responsible for determining if you qualify for treatment and advising you about medication usage. Pharmacy services provided through the platform are coordinated with a licensed U.S. based independently owned and operated Trūman-affiliated pharmacy</p>
                    <p>Transference Risks – With topical testosterone there is a risk of transference to third parties.</p>
                </div>
            </div>
            <div className="mobileFooter container-fluid">
                <div className="mobileFooter row">
                    <div className="col-12">
                        &copy; Tr<span className="accentedU">u</span>man Rx 2020
                    </div>
                    <div className="col-12" >
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <a className="footerLink" href="mailto:info@trumanrx.com">info@trumanrx.com</a>
                            <a className="footerLink" href="/privacy-policy">Privacy Policy</a>
                            <a className="footerLink" href="">Telehealth Consent</a>
                            <a className="footerLink" href="">Privacy Policy</a>
                            <a className="footerLink" href="">Terms & Conditions</a>
                            <a className="footerLink" href="">Disclaimer</a>
                            <a className="footerLink" href="">FAQ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;