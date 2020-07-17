import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import parse from 'html-react-parser';

const GetStarted = () => {
    const [data, setData] = useState(null);
    const [title, setTitle] = useState(null);
    const [meta, setMeta] = useState(null);
    const [agreeTerms1, setAgreeTerms1] = useState(null);
    const [agreeTerms2, setAgreeTerms2] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [state, setState] = useState('Select State');

    async function makeGetRequest() {

        await axios.get('http://cms.website.com/wp-json/wp/v2/pages/292')

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

    useEffect(() => {
        state === 'Colorado' || state === 'Select State' ? setShowMessage(false) : setShowMessage(true)
    }, [state])


    const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]



    return (
        <Layout title={title && title.rendered} meta={meta} >
            {data &&
                <div className="container my-md-5">
                    <div className="row my-md-4 py-md-5">
                        <div className="col-12 col-lg-8 col-xl-7 my-5 mx-auto py-5">
                            <h1>{data.heading}</h1>
                            <div className="formContainer">
                                <label style={{ fontSize: '1.5rem' }} for="state-select">{data.subheading}</label>
                                <Dropdown options={states} value={state} onChange={setState} />
                                {showMessage ?
                                    <div class="alert alert-danger mt-4" role="alert">{data.unavailable_message}</div>
                                    : null
                                }
                                <div>
                                    <div className='terms1 py-4'>
                                        <input type="checkbox" id="terms1" name="terms1" value
                                            ="terms
                                    1" onChange={() => setAgreeTerms1(!agreeTerms1)} />
                                        {' '}
                                        <label for="terms1">{parse(data.terms_1)}</label>
                                    </div>
                                    <div className='terms2'>
                                        <input type="checkbox" id="terms2" name="terms2" value="terms2" onChange={() => setAgreeTerms2(!agreeTerms2)} />
                                        {' '}
                                        <label for="terms2">{parse(data.terms_2)}</label>
                                    </div>
                                    <Button disabled={state !== 'Colorado' || !agreeTerms1 || !agreeTerms2}>Continue</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Layout>
    )
}

export default GetStarted;