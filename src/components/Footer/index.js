import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

import "./styles.css";

const Footer = props => {
    return (
        <div className="footerContainer container-fluid">
            <div className="desktopFooter row d-flex justify-content-center">
                <div className="col-12 col-md-10">
                    <div className="row">
                        <div className="col-12 text-center text-md-left col-md-3">
                            <Link className="footerLink d-block py-2 py-md-0" to="disclaimer">Disclaimer</Link>
                            <Link className="footerLink d-block py-2 py-md-0" to="faq">FAQ</Link>
                        </div>
                        <div className="col-12 text-center text-md-left col-md-3">
                            <a className="footerLink py-2 py-md-0" href="mailto:info@trumanrx.com">info@trumanrx.com</a>
                            <Link className="footerLink d-block py-2 py-md-0" to="privacy-policy">Privacy Policy</Link>
                        </div>
                        <div className="col-12 text-center text-md-left col-md-3">
                            <Link className="footerLink d-block py-2 py-md-0" to="terms-and-conditions">Terms and Conditions</Link>
                            <Link className="footerLink d-block py-2 py-md-0" to="telehealth-consent">Telehealth Consent</Link>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3">
                            <div className="row d-flex justify-content-center py-4 py-md-0">
                                <div className="col-2 facebook text-center"><FacebookIcon/></div>
                                <div className="col-2 instagram text-center"><InstagramIcon/></div>
                                <div className="col-2 twitter text-center"><TwitterIcon/></div>
                                <div className="col-2 linkedin text-center"><LinkedInIcon/></div>
                                <div className="col-2 youtube text-center"><YouTubeIcon/></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-10 py-2 py-md-4 text-center">
                    <p>Trūman is a digital men’s health platform that provides informational and administrative services only. The content on Trūman’s platform is not medical advice. Trūman-affiliated providers are independently owned and operated and are solely responsible for determining if you qualify for treatment and advising you about medication usage. Pharmacy services provided through the platform are coordinated with a licensed U.S. based independently owned and operated Trūman-affiliated pharmacy</p>
                    <p>Transference Risks – With topical testosterone there is a risk of transference to third parties.</p>
                </div>
                <div className="col-12 col-sm-12 col-md-3 text-center">
                    &copy; Tr<span className="accentedU">u</span>man Rx 2020
                </div>
            </div>
        </div>
    )
}

export default Footer;