import React, { useState, useEffect } from "react";
import axios from "axios";
import parse from 'html-react-parser';
import Layout from "../components/Layout";
import View from "../components/View";

const PrivacyPolicy = () => {
    const [content, setContent] = useState(null)
    const [title, setTitle] = useState(null)
    const [meta, setMeta] = useState(null)

    async function makeGetRequest() {

        await axios.get('http://cms.website.com/wp-json/wp/v2/pages/369')
            .then(res => {
                const responseTitle = res.data.title;
                const responseContent = res.data.content;
                const responseMeta = res.data.meta;
                setContent(responseContent);
                setTitle(responseTitle);
                setMeta(responseMeta);
            })
    }

    useEffect(() => {
        makeGetRequest()
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout title={title && title.rendered} meta={meta}>
            <View>
                <div className="container py-5">
                    {title && <h1 className="mb-4">{title.rendered}</h1>}
                    {content && parse(content.rendered)}
                </div>
            </View>
        </Layout>
    )
}

export default PrivacyPolicy;
