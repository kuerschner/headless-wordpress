import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from 'html-react-parser';
import Layout from "../components/Layout";
import View from "../components/View";
import Fade from "react-reveal/Fade";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SingleBlog = () => {
    let { blogId } = useParams();
    const [content, setContent] = useState(null)
    const [title, setTitle] = useState(null)
    const [meta, setMeta] = useState(null)
    const [featuredImage, setFeaturedImage] = useState(null)

    async function makeGetRequest() {

        await axios.get(`http://cms.trumanrx.com/wp-json/wp/v2/posts/${blogId}`)
		.then(res => {
            const responseTitle = res.data.title.rendered;
            const responseContent = res.data.content.rendered;
            const responseMeta = res.data.meta;
            const responseFeaturedImage = res.data.featured_media;
            setContent(responseContent);
            setTitle(responseTitle);
            setMeta(responseMeta);
            console.log("res.data.featured_media", res.data.featured_media)
            axios.get(`http://cms.trumanrx.com/wp-json/wp/v2/media/${responseFeaturedImage}`).then(res => {
                setFeaturedImage(res.data.source_url)
            })
		})
	}

    useEffect(() => {
        makeGetRequest()
    }, [])


    return (
        <Layout title={title && title} meta={meta}>
            <View>
                <div className="blog-hero" style={{ backgroundImage: `url(${featuredImage})`, backgroundPosition: "center", backgroundSize: "cover" }}>
					<div className="scroll-indicator shake-vertical">
						<ExpandMoreIcon fontSize="inherit" />
						<ExpandMoreIcon fontSize="inherit" />
						<ExpandMoreIcon fontSize="inherit" />
					</div>
				</div>
            </View>
            <View>
                <div className="container py-5 faq blog-container">
                    {title && <h1 className="mb-4">{title}</h1>}
                    {content && parse(content)}
                </div>
            </View>
        </Layout>
    )
}

export default SingleBlog;