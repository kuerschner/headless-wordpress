import React from "react"

export default (props) => {
    return (
        <div className="d-block" {...props}>
            {props.children}
        </div>
    )
}


