import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import View from "../components/View";
import { FaCheck } from "react-icons/fa";
import CenterText from "../components/CenterText";
import Molecule from "../images/molecule.png";

const Price = () => {
    const [data, setData] = useState(null)
    const [title, setTitle] = useState(null)
    const [meta, setMeta] = useState(null)

    async function makeGetRequest() {

        await axios.get('http://cms.website.com/wp-json/wp/v2/pages/117')

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
                        <div className="container py-sm-5">
                            <div className="row">
                                <div className="mt-4 col-12 mx-auto mt-2 text-center mb-2">
                                    <h1>{data.section_one_heading}</h1>
                                    <h2>{data.section_one_subheading}</h2>
                                </div>
                                <div className="col-12 mx-auto d-flex justify-content-center align-items-center mb-4">
                                    <a href={data.section_one_cta_link} className="button button-main mt-4">{data.section_one_cta}</a>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 mx-auto mt-4">
                                    <div className="card">
                                        <div className="card-header text-center">
                                            <h2 className="m-0">{data.price_card[0].card_title}</h2>
                                        </div>
                                        <div className="card-price pt-4 text-center">
                                            <div className="price-container d-flex justify-content-center align-items-center mx-auto">
                                                <h2>{data.price_card[0].card_price}</h2>
                                            </div>
                                        </div>
                                        <ul className="priceList m-0 px-4 px-lg-5 py-5">
                                            {data.price_card[0].card_bullet.map(bullet => (
                                                <li className="priceItem" key={bullet.bullet_text}>
                                                    <span className="priceIcon"><FaCheck /></span>
                                                    <h5 className="priceText">{bullet.bullet_text}</h5>
                                                </li>
                                            ))}
                                        </ul>
                                        <img src={Molecule} alt="Molecule Icon" className="card-molecule" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 mx-auto mt-4">
                                    <div className="card">
                                        <div className="card-header text-center">
                                            <h2 className="m-0">{data.price_card[1].card_title}</h2>
                                        </div>
                                        <div className="card-price pt-4 text-center">
                                            <div className="price-container d-flex justify-content-center align-items-center mx-auto">
                                                <h2 className="d-inline">{data.price_card[0].card_price}</h2>
                                            </div>
                                        </div>
                                        <ul className="priceList m-0 px-4 px-lg-5 py-5">
                                            {data.price_card[1].card_bullet.map(bullet => (
                                                <li className="priceItem" key={bullet.bullet_text}>
                                                    <span className="priceIcon"><FaCheck /></span>
                                                    <h5 className="priceText">{bullet.bullet_text}</h5>
                                                </li>
                                            ))}
                                        </ul>
                                        <img src={Molecule} alt="Molecule Icon" className="card-molecule" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </View>
                    <View>
                        <div className="container-fluid py-5 sub-footer">
                            <div className="row d-flex justify-content-center">
                                <div className="col-12 col-md-12 col-lg-10 col-xl-10 text-center">
                                    <CenterText heading={data.section_two_heading} />
                                    <a href={data.section_two_cta_link} className="button button-secondary">{data.section_two_cta}</a>
                                </div>
                            </div>
                        </div>
                    </View>
                </>
            }
        </Layout>
    )
}

export default Price;