import React, {useState, useEffect} from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Hero from "../components/Hero";
import CenterText from "../components/CenterText";
import LeftText from "../components/LeftText";
import IconText from "../components/IconText";
import IconHeading from "../components/IconHeading";
import Button from "../components/Button";
import View from "../components/View";

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
				<Hero image={data.hero_image} heading={data.hero_heading} content={data.hero_text} cta={data.hero_cta_text} ctaLink={data.hero_cta_link} />
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
							<a href={data.section_two_cta_link}>
								<Button>{data.section_two_cta_text}</Button>
							</a>
						</div>
					</div>
				</div>
			</View>
			<View>
				<div className="container py-5 mb-5">
					<div className="row">
						<div className="col-12 mx-auto col-md-8 col-lg-6">
							<LeftText heading={data.section_three_heading} content={data.section_three_description} />
							{data.section_three_items.map((value, key) =>
								<IconHeading key={key} heading={value.icon_heading} iconUrl={value.icon.url} iconAlt={value.icon.alt} />
							)}
						</div>
						<div className="d-none d-lg-block col-12 col-lg-6 text-center">
							<img className="img-fluid" src={data.section_three_background_image.url} alt={data.section_three_background_image.alt} />
						</div>
					</div>
				</div>
			</View>
			<View>
				<div className="container-fluid py-5 sub-footer">
					<div className="row d-flex justify-content-center">
						<div className="col-12 col-md-12 col-lg-10 col-xl-10 text-center">
							<CenterText heading={data.section_four_heading} />
							<Button type='button-secondary'>See if you qualify</Button>
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
