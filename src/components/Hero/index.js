import React, {useEffect, useState} from "react";
import Fade from "react-reveal/Fade";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Hero.module.css";
import Link from "next/link";
import Button from "../Button";


const Hero = ({ image, heading, subheading, content, cta, ctaLink, ctaTwo, ctaTwoLink, kind }) => {

    const [textFloat, setTextFloat] = useState("justify-content-center");

    useEffect(() => {
        if(kind !== undefined) {
            if(kind === "textRight") setTextFloat("justify-content-end")
            else if(kind === "textLeft") setTextFloat("justify-content-start")
            else setTextFloat("justify-content-center");
        }
    },[]);

    return(
    
        <div id="home" className="root" style={{ backgroundImage: `url(${image.url})`, height: "auto" }}>
            <div className="container-fluid">
                <div className={`row d-flex align-items-center h-100 min-vh-100 ${textFloat}`}>
                    <div className="col-12 col-sm-12 col-md-7 col-lg-6 heroTextContainer px-3">
                        <Fade bottom>
                            <>
                                {heading && <h1 className="text-white">{heading}</h1>}
                                {subheading && <h2>{subheading}</h2>}
                                {content && <p className="text-white">{content}</p>}
                                <div className="d-flex flex-direction-row justify-content-center">
                                    {cta && <div className="py-4 px-2 mt-4">
                                        <Link href={ctaLink}><Button>{cta}</Button></Link>
                                    </div>}
                                    {ctaTwo && <div className="py-4 px-2 mt-4">
                                        <Link href={ctaTwoLink}><Button>{cta}</Button></Link>
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