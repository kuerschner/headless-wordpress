import React from "react"
import "./styles.css";

export default ({ children }) => {
    return (
        <button className="button button-main mt-4">{children}</button>
    )
}
