import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import BlogPost from "../components/BlogPost";
import Fade from "react-reveal/Fade";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import parse from 'html-react-parser';

const Blog = () => {
    const [data, setData] = useState(null)
    const [blogData, setBlogData] = useState(null)
    const [catData, setCatData] = useState(null)
    const [title, setTitle] = useState(null)
    const [meta, setMeta] = useState(null)
    const [filters, setFilters] = useState([])
    const [all, setAll] = useState(true)

    async function makeGetRequest() {
        const callblogPage = await axios.get('http://cms.trumanrx.com/wp-json/wp/v2/pages/112')
        const callBlogs = await axios.get('http://cms.trumanrx.com/wp-json/wp/v2/posts')
        const callCats = await axios.get('http://cms.trumanrx.com/wp-json/wp/v2/categories')
    
        axios.all([callBlogs, callCats, callblogPage]).then(axios.spread((...responses) => {
            setBlogData(responses[0].data)
            setCatData(responses[1].data)
            setData(responses[2].data.acf);
			setTitle(responses[2].data.title);
            setMeta(responses[2].data.meta);
        })).catch(errors => {
            console.log(errors)
        })
    }

    useEffect(() => {
        makeGetRequest()
    }, [])

    const clickHandler = (cat) => {
        if(filters.includes(cat)) {
            const newFilters = [...filters];
            let ind = newFilters.indexOf(cat);
            if (ind !== -1) newFilters.splice(ind, 1);
            setFilters(newFilters)
        }
        else {
            setFilters([cat, ...filters])
        }
        setAll(false)
    }

    const resetHandler = () => {
        console.log("catData", catData);
        if(catData !== null) {
            const catNames = catData.map(cat => {
                return(
                    cat.name
                )
            })
            setFilters(catNames);
        }
        setAll(true)
    }

    return (
        <Layout title={title && title.rendered} meta={meta}>
            {data && 
            <>
                <div className="hero" style={{ backgroundImage: `url(${data.blog_hero_image.url})`, backgroundPosition: "top", backgroundSize: "cover" }}>
					<div className="container-fluid h-100">
						<div className="row d-flex align-items-center h-100 justify-content-end h-100">
							<div className="heroTextContainer d-flex align-items-center col-12 col-sm-12 col-md-6 col-xl-4 px-3 px-md-5 h-100">
								<Fade bottom>
									<div className="text-center">
										{data.blog_hero && <h1 className="text-white">{parse(data.blog_hero)}</h1>}
										<div className="heading-border mt-3 mb-4 mx-auto"></div>
										{data.blog_headline && <p className="text-white">{data.blog_headline}</p>}
									</div>
								</Fade>
							</div>
						</div>
					</div>
					<div className="scroll-indicator shake-vertical">
						<ExpandMoreIcon fontSize="inherit" />
						<ExpandMoreIcon fontSize="inherit" />
						<ExpandMoreIcon fontSize="inherit" />
					</div>
				</div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="mb-5">{data.blog_subheading}</h2>
                    </div>
                    <div className="col-12 text-center mb-5">
                        <button onClick={resetHandler} className={`${all ? "button-main" : "button-secondary"} mx-2 mb-4 button button-main`}>All</button>
                        {
                            catData.map(cat => (
                                <button key={cat.name} onClick={() => clickHandler(cat.name)} className={`${filters.includes(cat.name) ? "button-main" : "button-secondary"} mx-2 mb-4 button`}>{cat.name}</button>
                            ))
                        }
                    </div>
                </div>
                <div className="row p-4">
                    { blogData.length && 
                        blogData.map(post => (
                            <BlogPost 
                                heading={post.title.rendered}
                                content={parse(post.excerpt.rendered)}
                                topics={post._links["wp:term"]}
                                img={post.featured_media}
                                key={post.title.rendered}
                                filters={filters}
                                blogId={post.id}
                            />
                        ))
                    }
                </div>
            </div>
            </>
            }
        </Layout>
    )
}

export default Blog;