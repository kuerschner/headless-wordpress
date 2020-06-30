import React, {useState, useEffect} from "react";
import axios from "axios";
import Layout from "../components/Layout";
import HubspotForm from "react-hubspot-form";
import parse from 'html-react-parser';
import NewsPost from "../components/NewsPost"

const Contact = () => {
    const [data, setData] = useState(null)
    const [text, setText] = useState(null)
    const [meta, setMeta] = useState(null)
    const [news, setNews] = useState(null)

    async function makeGetRequest() {
        const contactContent = await axios.get('http://cms.trumanrx.com/wp-json/wp/v2/pages/114')
        const newsContent = await axios.get('http://cms.trumanrx.com/wp-json/wp/v2/news')
    
        axios.all([contactContent, newsContent]).then(axios.spread((...responses) => {
            setData(responses[0].data.acf)
            setText(responses[0].data)
            setMeta(responses[0].data.meta)
            setNews(responses[1].data)
        })).catch(errors => {
            console.log(errors)
        })
    }

    useEffect(() => {
        makeGetRequest()
    }, [])


    return (
        <Layout title={text && text.title.rendered} meta={meta}>
            {text && 
            <>
            <div className="container contact-container py-5">
                <div className="row d-flex justify-content-around">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-7 text-center">
                        <h2>{text.title.rendered}</h2>
                        <p>{text.content.rendered}</p>
                        <div className="formContainer">
                            <HubspotForm
                                portalId="7044962"
                                formId="5a49c981-98e4-4e9e-b496-d2a694bbf732"
                                onSubmit={() => console.log("Submit!")}
                                onReady={(form) => console.log("Form ready!")}
                                loading={<div>Loading...</div>}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 pt-5 text-center">
                        { data &&
                            data.body_fields.map((body) => {
                                return(
                                    <div className="row">
                                        <div className="col-12 py-3">
                                            {parse(body.body_field)}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        { news && 
                            news.map(news => (
                                <div className="row">
                                    <NewsPost 
                                        title={news.title.rendered}
                                        content={news.content.rendered}
                                        img={news.featured_media}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            </>
        }
        </Layout>
    )
}

export default Contact;