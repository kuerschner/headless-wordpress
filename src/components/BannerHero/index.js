import React, {useEffect, useState} from "react";
import Fade from "react-reveal/Fade";
import "./styles.css";



const Hero = ({ backgroundImage, heading, subheading, kind }) => {

    const [textFloat, setTextFloat] = useState("justify-content-center");

    useEffect(() => {
        if(kind !== undefined) {
            if(kind === "textRight") setTextFloat("justify-content-end")
            else if(kind === "textLeft") setTextFloat("justify-content-start")
            else setTextFloat("justify-content-center");
        }
    },[kind]);

    return(
    
        <div id="home" className="root" style={{ backgroundImage: `url(${backgroundImage.url})`, height: "100%", marginTop: "-120px" }}>
            <div className="container-fluid">
                <div className={`row d-flex align-items-center h-100 ${textFloat}`}>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-4 bannerHeroTextContainer px-3">
                        <Fade bottom>
                            <>
                                {heading && <h1 className="text-white pb-4">{heading}</h1>}
                                {subheading && <h2 className="text-white">{subheading}</h2>}
                            </>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hero;