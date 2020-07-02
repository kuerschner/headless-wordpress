import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import View from "../components/View";
import VideoText from "../components/VideoText";
import CenterText from "../components/CenterText";

const About = () => {

    const [data, setData] = useState(null)
    const [title, setTitle] = useState(null)
    const [meta, setMeta] = useState(null)

    async function makeGetRequest() {

        await axios.get('http://cms.trumanrx.com/wp-json/wp/v2/pages/33')
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
                <div className="container-fluid">
                    <div className="row min-vh-100">
                        <div className="about-hero-img col-12 col-md-6 col-lg-6" style={{ backgroundImage: `url(${data.section_one_image.url})`, backgroundSize: "cover" }}></div>
                        <div className="col-12 mx-auto col-md-8 col-lg-6 min-vh-100 d-flex align-items-center px-5">
                            <div className="row d-flex justify-content-center">
                                <div className="col-4 text-center my-4">
                                   <img className="img-fluid" src={data.section_one_icon.url} alt={data.section_one_icon.alt} />
                                </div>
                                <div className="col-12 text-center">
                                    <h1>{data.section_one_heading}</h1>
                                </div>
                                <div className="col-12 text-center">
                                    <p>{data.section_one_subheading}</p>
                                    <h5 className="py-5">{data.section_one_callout}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </View>
            <View>
                <div className="container py-lg-5 mt-lg-5">
                    <VideoText type="textRight" heading={data.section_two_heading} subHeading={data.section_two_subheading} src={data.section_two_video} />
                </div>
            </View>
            {/* <View>
                <div className="container pb-5">
                    <div className="row d-flex justify-content-around">
                        <div className="col-12">
                            <CenterText heading={data.section_three_heading} />
                        </div>
                    </div>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row" style={{ backgroundImage: `url(${data.section_three_image.url})`, backgroundSize: "cover", height: "600px", backgroundPosition: "center" }}></div>
                </div>
            </View> */}
            <View>
                <div className="container py-5">
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 pb-4">
                            <CenterText heading={data.section_four_1_heading} />
                        </div>
                        <div className="col-12">
                            <div className="row d-flex justify-content-around">
                                {data.section_four_1_icons.map((value, key) =>
                                    <div className="col-12 col-md-5 col-lg-4 text-center mb-5" key={key}>
                                        <img src={value.icon.url} alt={value.icon.alt} className="staff-img" />
                                        <h3>{value.heading}</h3>
                                        <p>{value.text}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row d-flex justify-content-around">
                                {data.section_four_2_icons.map((value, key) =>
                                    <div className="col-12 col-md-5 col-lg-3 text-center mb-5" key={key}>
                                        <img src={value.icon.url} alt={value.icon.alt} className="staff-img" />
                                        <h3>{value.heading}</h3>
                                        <p>{value.text}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="row about-full-image" style={{ backgroundImage: `url(${data.section_four_2_image.url})`, backgroundSize: "cover", height: "600px" }}></div>
                </div>
            </View>
            <View>
                <div className="container-fluid py-5 sub-footer">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-10 text-center">
                            <CenterText heading={data.section_five_main_heading} subHeading={data.section_five_heading} />
                        </div>
                    </div>
                </div>
            </View>
        </>
}
        </Layout>
    )
}



export default About;