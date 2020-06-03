import React from "react"

export default ({ heading, subHeading, iconUrl, iconAlt }) => {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-6 col-lg-3 my-4">
                {iconUrl && <img className="img-fluid" src={iconUrl} alt={iconAlt} />}
            </div>
            <div className="col-10 col-sm-8 col-md-6 col-lg-9">
                <div className="row h-100 d-flex align-items-center">
                    <div className="col-12 text-center text-md-left column-text">
                        {heading && <h3>{heading}</h3>}
                        {subHeading && <h4>{subHeading}</h4>}
                    </div>
                </div>
            </div>
        </div>
    )
}
