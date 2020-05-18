import React from "react";
import "./ImageText.module.css";

export default ({ type, heading, subHeading, content, src, alt }) => {
    return (
        <div className="row">
            {type === "textLeft" ?
                (
                    <>
                        <div className="col-12 col-sm-12 col-md-6 mx-auto py-4 px-5">
                            {heading && <h2>{heading}</h2>}
                            {subHeading && <h3>{subHeading}</h3>}
                            {content && <p>{content}</p>}
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 mx-auto py-4 px-5">
                            {src && <img src={src} alt={alt} />}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col-12 col-sm-12 col-md-6 mx-auto py-4 px-5">
                            {src && <img src={src} alt={alt} />}
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 mx-auto py-4 px-5">
                            {heading && <h2>{heading}</h2>}
                            {subHeading && <h3>{subHeading}</h3>}
                            {content && <p>{content}</p>}
                        </div>
                    </>
                )
            }
        </div>
    )
}


