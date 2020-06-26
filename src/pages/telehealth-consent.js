import React, {useState, useEffect} from "react";
import axios from "axios";
import parse from 'html-react-parser';
import Layout from "../components/Layout";
import View from "../components/View";

const TelehealthConsent = () => {
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [meta, setMeta] = useState(null)

    async function makeGetRequest() {
        await axios.get('http://cms.trumanrx.com/wp-json/wp/v2/pages/375')
		.then(res => {
                const responseContent = res.data.content;
                const responseTitle = res.data.title;
				const responseMeta = res.data.meta;
				setContent(responseContent);
				setTitle(responseTitle);
				setMeta(responseMeta);
		})
	}

    useEffect(() => {
        makeGetRequest()
    }, [])

    return (
        <Layout title={title && title.rendered} meta={meta}>
            {content && 
                <View>
                    <div className="container py-5">
                        <h1 className="mb-4">{title.rendered}</h1>
                        {parse(content.rendered)}
                    </div>
                </View>
            }
        </Layout>
    )
}

export default TelehealthConsent;