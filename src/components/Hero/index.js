import React, {useEffect, useState} from "react";
import Fade from "react-reveal/Fade";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./styles.css";
import Button from "../Button";


const Hero = ({ image, heading, subheading, content, cta, ctaLink, ctaTwo, ctaTwoLink, kind, className }) => {

    const [textFloat, setTextFloat] = useState("justify-content-center");

    useEffect(() => {
        if(kind !== undefined) {
            if(kind === "textRight") setTextFloat("justify-content-end")
            else if(kind === "textLeft") setTextFloat("justify-content-start")
            else setTextFloat("justify-content-center");
        }
    },[kind]);

    return(
    
        <div id="home" className={`root ${className}`} style={{ backgroundImage: `url(${image.url})`, height: "auto", backgroundPosition: "center" }}>
            <div className="container-fluid">
                <div className={`row d-flex align-items-center h-100 min-vh-100 ${textFloat}`}>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-6 heroTextContainer px-4">
                        <Fade bottom>
                            <>
                                {heading && <h1 className="text-white">{heading}</h1>}
                                {subheading && <h2>{subheading}</h2>}
                                {content && <p className="text-white">{content}</p>}
                                <div className="row d-flex justify-content-center">
                                    {cta && <div className={`col-12 col-lg-6 ${ctaTwo ? "text-lg-right" : "text-center"}`}>
                                        <a href={ctaLink}><Button>{cta}</Button></a>
                                    </div>}
                                    {ctaTwo && <div className="col-12 col-lg-6 text-lg-left">
                                        <a href={ctaTwoLink}><Button type='button-secondary'>{ctaTwo}</Button></a>
                                    </div>}
                                </div>
                            </>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator shake-vertical">
                <ExpandMoreIcon fontSize="inherit" />
                <ExpandMoreIcon fontSize="inherit" />
                <ExpandMoreIcon fontSize="inherit" />
            </div>
        </div>
    )
}


export default Hero;