import React from "react";
import Link from "next/link";
import axios from "axios";
import Layout from "../components/Layout";
import View from "../components/View";
import CenterText from "../components/CenterText";
import IconText from "../components/IconText";
import IconHeading from "../components/IconHeading";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

const TRT = ({ data, title, meta }) => {

    return (
        <Layout title={title.rendered} meta={meta}>
            <View>
                <Carousel type="fullScreen" slides={data.section_one_carousel} />
            </View>
            <View>
                <div className="container py-5">
                    <div className="row d-flex justify-content-around">
                        {data.section_two_fields.map(section => (
                            <div className="col-12 col-md-5 mt-4">
                                <div className="text-center">
                                    <img src={section.image.url} alt={section.image.alt} style={{ maxHeight: "300px" }} />
                                </div>
                                <CenterText subHeading={section.heading} content={section.text_area} />
                            </div>
                        ))}
                        <div className="col-12 mx-auto text-center pt-5">
                            <CenterText heading={data.section_two_subheading} />
                        </div>
                    </div>
                </div>
            </View>
            <View>
                <div className="min-vh-100 container-fluid" style={{ backgroundImage: `url(${data.section_three_background_image.url})`, backgroundSize: "cover" }}>
                    <div className="min-vh-100 row d-flex justify-content-lg-end">
                        <div className="col-12 col-lg-8 col-xl-7 trt-bg-overlay min-vh-100 d-flex align-items-center py-5">
                            <div className="row">
                                <div className="col-12">
                                    <CenterText heading={data.section_three_heading} content={data.section_three_subheading} />
                                </div>
                                {data.section_three_icons.map((value, key) =>
                                    <div className="col-12 col-md-6 col-lg-3 text-center mt-4" key={key}>
                                        <IconText heading={value.icon_heading} iconUrl={value.icon.url} iconAlt={value.icon.alt}/>
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
                            <CenterText subHeading={data.section_four_heading} />
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row">
                                {data.section_four_icons.map(section => (
                                    <div className="col-6">
                                        <IconText icon={section.icon} heading={section.heading} content={section.text_area} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </View>
            <View>
                <div className="container py-5">
                    <div className="row m-4">
                        <div className="col-12">
                            <CenterText heading={data.section_five_heading} />
                        </div>
                        <div className="col-12 text-center">
                            <Link href={data.section_five_cta_link}><Button>{data.section_five_cta_text}</Button></Link>
                        </div>
                    </div>
                </div>
            </View>
        </Layout >
    )
}

TRT.getInitialProps = async ({ req }) => {
    const res = await axios.get(`http://cms.trumanrx.com/wp-json/wp/v2/pages/12`)
    return { data: res.data.acf, title: res.data.title, meta: res.data.meta }
}
export default TRT;

