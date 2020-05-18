import React from "react";
import Link from "next/link";
import axios from "axios";
import Layout from "../components/Layout";
import View from "../components/View";
import Button from "../components/Button";
import { FaCheck } from "react-icons/fa";

const Price = ({ data, title, meta }) => {
    return (
        <Layout title={title.rendered} meta={meta}>
            <View>
                <div className="container py-5">
                    <div className="row">
                        <div className="mt-4 col-12 mx-auto mt-2 text-center mb-2">
                            <h1>{data.section_one_heading}</h1>
                            <h2>{data.section_one_subheading}</h2>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 mx-auto mt-4">
                            <div className="card p-3 p-md-4 mx-auto w-75 shadow">
                                <h3 className="text-center">{data.price_card[0].card_title}</h3>
                                <ul className="priceList p-0 m-0">
                                    {data.price_card[0].card_bullet.map(bullet => (
                                        <li className="priceItem" key={bullet.bullet_text}>
                                            <span className="priceIcon"><FaCheck /></span>
                                            <h4 className="priceText">{bullet.bullet_text}</h4>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-center">{data.price_card[0].card_price}</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 mx-auto mt-4">
                            <div className="card p-3 p-md-4 mx-auto w-75 shadow">
                                <h3 className="text-center">{data.price_card[1].card_title}</h3>
                                <ul className="priceList">
                                    {data.price_card[1].card_bullet.map(bullet => (
                                        <li className="priceItem" key={bullet.bullet_text}>
                                            <span className="priceIcon"><FaCheck /></span>
                                            <h4 className="priceText">{bullet.bullet_text}</h4>

                                        </li>
                                    ))}
                                </ul>
                                <p className="text-center">{data.price_card[1].card_price}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 mx-auto d-flex justify-content-center align-items-center">
                            <Link href={data.section_one_cta_link}><Button>{data.section_one_cta}</Button></Link>
                        </div>
                    </div>
                </div>
            </View>
        </Layout>
    )
}

Price.getInitialProps = async ({ req }) => {
    const res = await axios.get(`http://cms.trumanrx.com/wp-json/wp/v2/pages/117`)
    return { data: res.data.acf, title: res.data.title, meta: res.data.meta }
}

export default Price;