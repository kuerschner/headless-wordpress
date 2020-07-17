import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";

export default ({ heading, content, topics, img, filters, blogId }) => {
    const [data, setData] = useState([])
    const [image, setImage] = useState(null)
    const [cats, setCats] = useState([])
    const [show, setShow] = useState(true)

    async function makeGetRequest() {
        const callTopics = await axios.get(`${topics[0].href}`)
        const callFeaturedImg = await axios.get(`http://cms.website.com/wp-json/wp/v2/media/${img}`)
    
        axios.all([callTopics, callFeaturedImg]).then(axios.spread((...responses) => {
            setData(responses[0].data)
            setImage(responses[1].data)   
            setCats(responses[0].data.map(cat => cat.name))
        })).catch(errors => {
            console.log(errors)
        })
    }

    useEffect(() => {
        makeGetRequest()
    }, [makeGetRequest])

    useEffect(() => {
        if(cats.length) {
            const intersection = filters.filter(element => cats.includes(element));
            if(!intersection.length) setShow(false)
            else setShow(true)
        }
    }, [cats, filters])

    return (
        show ?
            <div className="col-12 col-sm-12 col-md-4 mb-5">
                <div className="card blog-card">
                    <div className="card-image p-5 row" style={{ backgroundImage: `url(${image !== null && image.source_url})`, backgroundPosition: "center", backgroundSize: "cover" }}></div>
                    <div className="row">
                        <div className="col-12 pt-5 pl-5 pr-5">
                            {
                                data && 
                                    data.map(cat => 
                                        <span key={cat.name} className="badge badge-secondary mr-1">{cat.name}</span>
                                )
                            }
                            {heading && <h2 className="mt-4 mb-1">{heading}</h2>}
                            {content && content}
                        </div>
                        <div className="col-12 pb-5 text-center">
                            <Link to={`blog/${blogId}`} className="mt-4 button button-main">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        :
        null
    )
}


