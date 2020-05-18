import React from "react";

export default ({ type, heading, subHeading, content, src }) => {
    return (
        <div className="row h-100 d-flex align-items-center">
            {type === "textLeft" ?
                (
                    <>
                        <div className="col-12 col-sm-12 col-lg-4 mt-4 mt-lg-0">
                            {heading && <h2>{heading}</h2>}
                            {subHeading && <p>{subHeading}</p>}
                        </div>
                        <div className="col-12 col-sm-12 col-lg-8">
                            {src && <iframe width="100%" height="400px" src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col-12 col-sm-12 col-lg-8">
                            {src && <iframe width="100%" height="400px" src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                        </div>
                        <div className="col-12 col-sm-12 col-lg-4 mt-4 mt-lg-0">
                            {heading && <h2>{heading}</h2>}
                            {subHeading && <p>{subHeading}</p>}
                        </div>
                    </>
                )
            }
        </div>
    )
}


