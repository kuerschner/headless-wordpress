import React from "react";
import axios from "axios";
import Link from "next/link";
import Layout from "../components/Layout";
import View from "../components/View";
import CenterText from "../components/CenterText";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Quiz from "../components/Quiz";

const GetChecked = ({ data, title, meta }) => {

    return (
        <Layout title={title.rendered} meta={meta}>
            <View>
                <Hero image={data.section_one_image} heading={data.section_one_heading} content={data.section_one_subheading} cta={data.section_one_cta_one} ctaLink={data.hero_cta_one_link} ctaTwo={data.section_one_cta_two} ctaTwoLink={data.hero_cta_two_link} />
            </View>
            <Quiz />
            <View>
                <div className="container pb-5">
                    <div className="row m-4 d-flex justify-content-center align-items-between h-100">
                        <div className="col-12 mx-auto">
                            <CenterText heading={data.section_three_heading} />
                        </div>
                        <div className="col-12 mx-auto d-flex justify-content-center align-items-center">
                            <Link href={data.section_three_cta_link}><Button>{data.section_three_cta}</Button></Link>
                        </div>
                    </div>
                </div>
            </View>
        </Layout>
    )
}

GetChecked.getInitialProps = async ({ req }) => {
    const res = await axios.get(`http://cms.trumanrx.com/wp-json/wp/v2/pages/109`)
    return { data: res.data.acf, title: res.data.title, meta: res.data.meta }
}

export default GetChecked;