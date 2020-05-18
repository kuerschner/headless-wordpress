import React from "react";
import "./styles.css";

export default ({ heading, content, topic, img }) => {
    return (
        <div className="col-12 col-sm-12 col-md-4 mx-auto mb-5">
            <div className="card">
                {topic && <div className="topic p-5">{topic}</div>}
                {heading && <h3 className="px-5">{heading}</h3>}
                {content && <p className="px-5 pb-5">{content}</p>}
                {img && <img className="blogCardImg img-fluid" src={img.src} alt={img.alt} />}
            </div>
        </div>
    )
}


