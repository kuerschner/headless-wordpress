import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import View from "../components/View";
import CenterText from "../components/CenterText";
import IconText from "../components/IconText";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import parse from 'html-react-parser';

const TRT = () => {

    const [data, setData] = useState(null)
    const [title, setTitle] = useState(null)
    const [meta, setMeta] = useState(null)

    async function makeGetRequest() {

        await axios.get('http://cms.trumanrx.com/wp-json/wp/v2/pages/12')

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
                    <Carousel type="fullScreen" slides={data.section_one_carousel} />
                </View>
                <View>
                    <div className="container py-5">
                        <div className="row d-flex justify-content-around">
                            {data.section_two_fields.map(section => (
                                <div className="col-12 col-md-5 mt-4 trt-columns" key={section.image.url}>
                                    <div className="text-center">
                                        <img src={section.image.url} alt={section.image.alt} style={{ maxHeight: "300px" }} />
                                    </div>
                                    <h3>{section.heading}</h3>
                                    <p>{parse(section.text_area)}</p>
                                </div>
                            ))}
                            {/* <div className="col-12 mx-auto text-center pt-5">
                                <CenterText heading={data.section_two_subheading} />
                            </div> */}
                        </div>
                    </div>
                </View>
                <View>
                    <div className="min-vh-100 container-fluid" style={{ backgroundImage: `url(${data.section_three_background_image.url})`, backgroundSize: "cover" }}>
                        <div className="min-vh-100 row d-flex justify-content-lg-end">
                            <div className="col-12 col-lg-7 col-xl-6 trt-bg-overlay min-vh-100 d-flex align-items-center py-5">
                                <div className="row">
                                    <div className="col-12">
                                        <CenterText heading={data.section_three_heading} content={data.section_three_subheading} />
                                    </div>
                                    {data.section_three_icons.map((value, key) =>
                                        <div className="col-12 col-md-6 col-lg-3 text-center mt-4" key={key}>
                                            <IconText heading={value.icon_heading} iconUrl={value.icon.url} iconAlt={value.icon.alt} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </View>
                <View>
                    <div className="container py-5">
                        <div className="row pt-4">
                            <div className="col-12 col-lg-6 px-lg-5 d-flex align-items-center">
                                <div className="topicalAdvantage text-center text-lg-left">
                                    <h2>{data.section_four_main_heading}</h2>
                                    <h3>{data.section_four_heading}</h3>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="row">
                                    {data.section_four_icons.map(section => (
                                        <div className="col-6">
                                            <IconText heading={section.heading} content={section.text_area} iconUrl={section.icon.url} iconAlt={section.icon.alt}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </View>
                <View>
                    <div className="container-fluid py-5 sub-footer">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 col-md-12 col-lg-10 col-xl-10 text-center">
                                <CenterText heading={data.section_five_heading} />
                                <a href={data.section_five_cta_link}><Button type='button-secondary'>{data.section_five_cta_text}</Button></a>
                            </div>
                        </div>
                    </div>
                </View>
            </>
        }
        </Layout >
    )
}

export default TRT;

