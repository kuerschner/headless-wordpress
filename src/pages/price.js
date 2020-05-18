import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import View from "../components/View";
import Button from "../components/Button";
import { FaCheck } from "react-icons/fa";

const Price = () => {
    const [data, setData] = useState(null)
    const [title, setTitle] = useState(null)
    const [meta, setMeta] = useState(null)

    async function makeGetRequest() {

        await axios.get('http://cms.trumanrx.com/wp-json/wp/v2/pages/117')

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
                                <a href={data.section_one_cta_link}><Button>{data.section_one_cta}</Button></a>
                            </div>
                        </div>
                    </div>
                </View>
            }
        </Layout>
    )
}

export default Price;