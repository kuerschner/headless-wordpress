import React, {useState, useEffect} from "react";
import axios from "axios";
import Layout from "../components/Layout";
import HubspotForm from "react-hubspot-form";

// To Do:
// 1. Verify layout and data
// 2. Verify contact form

const Contact = () => {
    const [data, setData] = useState(null)
    const [title, setTitle] = useState(null)
    const [meta, setMeta] = useState(null)

    async function makeGetRequest() {

        await axios.get('http://cms.trumanrx.com/wp-json/wp/v2/pages/114')

        .then(res => {
                const responseData = res.data.acf;
                const responseTitle = res.data.title;
                const responseMeta = res.data.meta;
                setData(responseData);
                setTitle(responseTitle);
                setMeta(responseMeta);
        })

    }

    useEffect(() => {
        makeGetRequest()
    }, [])

    return (
        <Layout title={title && title.rendered} meta={meta}>
            {data && 
            <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto p-5 text-center">
                        <h2>{data.contact_form_heading}</h2>
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
                    <div className="col-12 col-sm-12 col-md-6 mx-auto p-5 text-center">
                        <h2>{data.icon_heading}</h2>
                        <div className="row">
                            {/* Assuming these are going to be social links */}
                            <div className="col-4">
                                <a href="#">
                                    <img src="" alt="" />
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="#">
                                    <img src="" alt="" />
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="#">
                                    <img src="" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        }
        </Layout>
    )
}

export default Contact;