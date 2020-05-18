import React from "react"

export default ({ heading, subHeading, backgroundImg }) => {
    return (
        <div className="100vw" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "400px" }}>
            <div className="row d-flex justify-content-center justify-content-sm-center justify-content-md-end align-items-center p-5">
                <div className="col-4 text-white">
                    {heading && <h2>{heading}</h2>}
                    {subHeading && <h3>{subHeading}</h3>}
                </div>
            </div>
        </div>
    )
}


