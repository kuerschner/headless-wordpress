import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
import axios from "axios";
import "./styles.css";

export default ({ title, content, img }) => {
    const [image, setImage] = useState(null)

    async function makeGetRequest() {
        await axios.get(`http://cms.trumanrx.com/wp-json/wp/v2/media/${img}`)
		.then(res => {
            setImage(res.data.source_url)
            console.log(res.data.source_url)
		})
	}

    useEffect(() => {
        makeGetRequest()
    }, [makeGetRequest])
    

    return (
        <div className="col-12 mb-5">
            <div className="card blog-card">
                <div className="row">
                    <div className="card-image p-5 col-12 col-lg-3" style={{ backgroundImage: `url(${image !== null && image})`, backgroundPosition: "center", backgroundSize: "cover" }}></div>
                    <div className="col-12 col-lg-9 p-5">
                        {title && <h2 className="mt-0 mb-2">{title}</h2>}
                        {content && parse(content)}
                    </div>
                </div>
            </div>
        </div>
    )
}


