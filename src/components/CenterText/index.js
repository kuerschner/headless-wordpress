import React from "react"

export default ({ heading, subHeading, content }) => {
    return (
        <div className="row">
            <div className="col-12 text-center">
                {heading && <h2>{heading}</h2>}
                {subHeading && <h3>{subHeading}</h3>}
                {content && <p>{content}</p>}
            </div>
        </div>
    )
}


