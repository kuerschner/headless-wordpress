import React, {useState, useEffect} from "react";
import Layout from "../components/Layout";
import axios from "axios";
import CenterText from "../components/CenterText";
import LeftText from "../components/LeftText";
import IconText from "../components/IconText";
import IconHeading from "../components/IconHeading";
import View from "../components/View";
import Fade from "react-reveal/Fade";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import parse from 'html-react-parser';

const Home = () => {
	const [data, setData] = useState(null)
	const [title, setTitle] = useState(null)
	const [meta, setMeta] = useState(null)

	async function makeGetRequest() {

	await axios.get('http://cms.trumanrx.com/wp-json/wp/v2/pages/9')
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
						<div id="home" className="hero" style={{ backgroundImage: `url(${data.hero_image.url})`, backgroundPosition: "center", backgroundSize: "cover" }}>
							<div className="container-fluid">
								<div className="row d-flex align-items-center h-100 min-vh-100">
									<div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 heroTextContainer px-5 d-flex align-items-center">
										<Fade bottom>
											<div className="text-center">
												<img className="heroLogo" src={require("../images/logo.svg")} alt="Truman RX Logo"/>
												<div className="heading-border mt-4 mb-3 mx-auto"></div>
												{data.hero_heading && <h1 className="text-white">{parse(data.hero_heading)}</h1>}
												<div className="heading-border mt-3 mb-4 mx-auto"></div>
												{data.hero_text && <p className="text-white">{data.hero_text}</p>}
												<div className="row d-flex justify-content-center">
													{
														data.hero_cta_text && 
															<div className="col-12 col-lg-6">
																<a href={data.hero_cta_link} className="button button-main mt-4">{data.hero_cta_text}</a>
															</div>
													}
												</div>
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
					</View>
					<View>
						<div className="container py-5">
							<div className="row">
								<div className="col-12 mt-4">
									<CenterText heading={data.section_two_heading} />
								</div>
								{data.section_two_items.map((value, key) =>
									<div className="col-12 col-md-6 col-lg-3 text-center" key={key}>
										<IconText heading={value.icon_heading} content={value.icon_text} iconUrl={value.icon.url} iconAlt={value.icon.alt} />
									</div>
								)}
								<div className="col-12 text-center">
									<a href={data.section_two_cta_link} className="button button-main mt-4">{data.section_two_cta_text}</a>
								</div>
							</div>
						</div>
					</View>
					<View style={{backgroundImage: `url(${data.section_three_background_image.url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
						<div className="container">
							<div className="row">
							<div className="d-none d-lg-block col-12 col-lg-6 text-center">
									
									</div>
								<div className="col-12 mx-auto col-md-8 col-lg-6 solid-blue-background">
									<LeftText heading={data.section_three_heading} content={data.section_three_description} />
									{data.section_three_items.map((value, key) =>
										<IconHeading key={key} heading={value.icon_heading} iconUrl={value.icon.url} iconAlt={value.icon.alt} />
									)}
								</div>

							</div>
						</div>
					</View>
					<View>
						<div className="container-fluid py-5 sub-footer">
							<div className="row d-flex justify-content-center">
								<div className="col-12 col-md-12 col-lg-10 col-xl-10 text-center">
									<CenterText heading={data.section_four_heading} />
									<a href={data.section_four_cta_link} className="button button-secondary mt-4">{data.section_four_cta_text}</a>
								</div>
							</div>
						</div>
					</View>
				</>
			}
		</Layout>
	)
}

export default Home
