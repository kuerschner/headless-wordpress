import React from "react";
import axios from "axios";
import Layout from "../components/Layout";
import View from "../components/View";
import VideoText from "../components/VideoText";
import CenterText from "../components/CenterText";
import IconText from "../components/IconText";

const About = ({ data, title, meta }) => {

    console.log('data: ', data);

    // return (
    //     <Layout title={title.rendered} meta={meta}>
    //         <View>
    //             <Hero image={data.section_one_image} heading={data.section_one_heading} content={data.section_one_subheading} kind="textRight" />
    //         </View>
    //         <View>
    //             <VideoText type="textLeft" heading={data.section_two_heading} subHeading={data.section_two_subheading} src={data.section_two_video} />
    //         </View>
//         <View>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12 mx-auto">
//                         <CenterText heading={data.section_three_heading} />
//                     </div>
//                 </div>
//             </div>
//             <img className="vw-100 h-50" src={data.section_three_image.url} alt={data.section_three_image.url} />
//         </View>
    //         <View>
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="col-12 mx-auto">
    //                         <CenterText heading={data.section_four_heading} />
    //                     </div>
    //                     <div className="col-12 mx-auto p-4 text-center">
    //                         <img className="w-75" src={data.section_four_image.url} alt={data.section_four_image.alt} />
    //                     </div>
    //                 </div>
    //             </div>
    //         </View>
    //         <View>
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="col-12 mx-auto">
    //                         <CenterText heading={data.section_five_heading} />
    //                     </div>
    //                 </div>
    //             </div>
    //         </View>
    //     </Layout>
    // )

    return(
        <Layout title={title.rendered} meta={meta}>
            <View>
                <div className="container-fluid">
					<div className="row min-vh-100">
						<div className="d-none d-md-block col-md-6 col-lg-6" style={{ backgroundImage: `url(${data.section_one_image.url})`, backgroundSize: "cover" }}></div>
                        <div className="col-12 mx-auto col-md-8 col-lg-6 min-vh-100 d-flex align-items-center px-5">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1>{data.section_one_heading}</h1>
                                </div>
                                <div className="col-12">
                                    <p>{data.section_one_subheading}</p>  
                                </div>
                            </div>
						</div>
					</div>
				</div>
            </View>
            <View>
				<div className="row">
					<div className="container py-5">
						<hr />
					</div>
				</div>
			</View>
            <View>
                <div className="container">
                    <VideoText type="textRight" heading={data.section_two_heading} subHeading={data.section_two_subheading} src={data.section_two_video} />
				</div>
            </View>
            <View>
				<div className="row">
					<div className="container py-5">
						<hr />
					</div>
				</div>
			</View>
            <View>
                <div className="container pb-5">
                    <div className="row d-flex justify-content-around">
                        <div className="col-12">
                            <CenterText heading={data.section_three_heading} />
                        </div>
                    </div>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row" style={{ backgroundImage: `url(${data.section_three_image.url})`, backgroundSize: "cover", height: "600px", backgroundPosition: "center" }}></div>
                </div>
            </View>
            <View>
                <div className="container py-5">
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 pb-4">
                            <CenterText heading={data.section_four_heading} />
                        </div>
                        {data.section_four_icons.map((value, key) => 
							<div className="col-12 col-md-6 col-lg-3 text-center" key={key}>
								<IconText heading={value.heading} content={value.text} iconUrl={value.icon.url} iconAlt={value.icon.alt}/>
							</div>
						)}
                    </div>
                </div>
                <div className="container-fluid my-5">
                    <div className="row" style={{ backgroundImage: `url(${data.section_four_image.url})`, backgroundSize: "cover", height: "400px", backgroundPosition: "center" }}></div>
                </div>
            </View>
            <View>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-lg-8">
                            <CenterText heading={data.section_five_heading} />
                        </div>
                    </div>
                </div>
            </View>
        </Layout>
    )
}

About.getInitialProps = async ({ req }) => {
    const res = await axios.get(`http://cms.trumanrx.com/wp-json/wp/v2/pages/33`)
    return { data: res.data.acf, title: res.data.title, meta: res.data.meta }
}

export default About;