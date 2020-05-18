import React from "react";
import axios from "axios";
import Layout from "../components/Layout";
import BannerHero from "../components/BannerHero";
import BlogPost from "../components/BlogPost";
import image1 from "../images/section3bg.jpg";
import image2 from "../images/bgMain.jpg";

// TO DO: 
// 1. Connect Blog Posts
// 2. Add Blog Filtering?
// 3. Clean up imports

const Blog = ({ data, title, meta }) => {
    console.log('data: ', data);
    const blogPosts = [
        {
            title: "blogPost 1",
            snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            topic: "topic 1",
            img: {
                src: image2,
                alt: "test alt"
            }
        },
        {
            title: "blogPost 2",
            snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            topic: "topic 2",
            img: {
                src: image2,
                alt: "test alt"
            }
        },
        {
            title: "blogPost 3",
            snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            topic: "topic 3",
            img: {
                src: image2,
                alt: "test alt"
            }
        },
        {
            title: "blogPost 4",
            snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            topic: "topic 2",
            img: {
                src: image2,
                alt: "test alt"
            }
        },
        {
            title: "blogPost 5",
            snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            topic: "topic 1",
            img: {
                src: image2,
                alt: "test alt"
            }
        },
        {
            title: "blogPost 6",
            snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            topic: "topic 1",
            img: {
                src: image2,
                alt: "test alt"
            }
        },

    ]
    return (
        <Layout title={title.rendered} meta={meta}>
            <BannerHero heading={data.blog_hero} />
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mx-auto p-5">
                        <h2>{data.blog_headline}</h2>
                        <h3>{data.blog_subheading}</h3>
                        {/* TODO: Add Filtering Here */}
                    </div>
                </div>
                <div className="row p-4">
                    {
                        blogPosts.map(post => (
                            <BlogPost heading={post.title} content={post.snippet} topic={post.topic} img={post.img} />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

Blog.getInitialProps = async ({ req }) => {
    const res = await axios.get(`http://cms.trumanrx.com/wp-json/wp/v2/pages/112`)
    return { data: res.data.acf, title: res.data.title, meta: res.data.meta }
}
export default Blog;