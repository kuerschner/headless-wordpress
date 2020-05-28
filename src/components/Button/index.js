import React from "react"
import "./styles.css";

export default ({ children, type='button-main', disabled }) => {
    return (
        <button className={`button ${type} mt-4`} disabled={disabled}>{children}</button>
    )
}
