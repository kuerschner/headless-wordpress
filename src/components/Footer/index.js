import React from "react";
import "./styles.css";

const Footer = props => {
    return (
        <div className="footerContainer">
            <div className="desktopFooter">
                <div className="row d-flex justify-content-between align-items-start w-100">
                    <div className="col-12 col-sm-12 col-md-6">
                        &copy; Tr<span className="accentedU">u</span>man Rx 2020
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="d-flex flex-column justify-content-between align-items-end">
                            <a className="footerLink" href="mailto:info@trumanrx.com">info@trumanrx.com</a>
                            <a className="footerLink" href="/privacy-policy">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobileFooter">
                <div className="row justify-content-center align-items-center mobileFooter">
                    <div className="col-12">
                        &copy; Tr<span className="accentedU">u</span>man Rx 2020
                    </div>
                    <div className="col-12" >
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <a className="footerLink" href="mailto:info@trumanrx.com">info@trumanrx.com</a>
                           <a className="footerLink" href="/privacy-policy">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;