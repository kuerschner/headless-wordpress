import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import View from "../components/View";
import Quiz from "../components/Quiz";
import Fade from "react-reveal/Fade";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import parse from 'html-react-parser';

const GetChecked = () => {
    const [data, setData] = useState(null)
    const [title, setTitle] = useState(null)
    const [meta, setMeta] = useState(null)

    async function makeGetRequest() {

        await axios.get('http://cms.website.com/wp-json/wp/v2/pages/109')
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
                    <View>
                        <div className="hero" style={{ backgroundImage: `url(${data.section_one_image.url})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                            <div className="container-fluid h-100">
                                <div className="row d-flex align-items-center h-100">
                                    <div className="heroTextContainer d-flex align-items-center col-12 col-sm-12 col-md-6 col-xl-4 px-3 px-md-5 h-100">
                                        <Fade bottom>
                                            <div className="text-center">
                                                {data.section_one_heading && <h1 className="text-white">{parse(data.section_one_heading)}</h1>}
                                                <div className="heading-border mt-3 mb-4 mx-auto"></div>
                                                {data.section_one_subheading && <p className="text-white">{data.section_one_subheading}</p>}
                                                <div className="row d-flex justify-content-center">
                                                    {
                                                        data.section_one_cta_one &&
                                                        <div className="col-12 col-lg-6">
                                                            <a href={data.section_one_cta_one_link} className="button button-main mt-4">{data.section_one_cta_one}</a>
                                                        </div>
                                                    }
                                                    {
                                                        data.section_one_cta_two &&
                                                        <div className="col-12 col-lg-6">
                                                            <a href={data.section_one_cta_two_link} className="button button-main mt-4">{data.section_one_cta_two}</a>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                            <div className="scroll-indicator shake-vertical">
                                <ExpandMoreIcon fontSize="inherit" />
                                <ExpandMoreIcon fontSize="inherit" />
                                <ExpandMoreIcon fontSize="inherit" />
                            </div>
                        </div>
                    </View>
                    <div id='quiz'>
                        <div className='pt-2'>
                            <Quiz />
                        </div>
                    </div>
                </>
            }
        </Layout>
    )
}

export default GetChecked;