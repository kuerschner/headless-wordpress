import React from "react"

export default ({ iconUrl, iconAlt, heading, content }) => (
    <div className="row">
        <div className="col-12">
            <div className="row d-flex justify-content-center">
                <div className="col-8 my-4">
                    {iconUrl && <img className="img-fluid" src={iconUrl} alt={iconAlt} />}
                </div>
            </div>
        </div>
        <div className="col-12 text-center column-text">
            {heading && <h3>{heading}</h3>}
            {content && <p>{content}</p>}
        </div>
    </div>


)
