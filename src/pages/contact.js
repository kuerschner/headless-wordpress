import React from "react";
import axios from "axios";
import Layout from "../components/Layout";
import HubspotForm from "react-hubspot-form";

// To Do:
// 1. Verify layout and data
// 2. Verify contact form

const Contact = ({ data, title, meta }) => (
    <Layout title={title.rendered} meta={meta}>
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
    </Layout>
)

Contact.getInitialProps = async ({ req }) => {
    const res = await axios.get(`http://cms.trumanrx.com/wp-json/wp/v2/pages/114`)
    return { data: res.data.acf, title: res.data.title, meta: res.data.meta }
}

export default Contact;