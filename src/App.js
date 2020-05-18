import React from "react";
import "./App.css";
import "../css/bootstrap-grid.css";
import "../css/bootstrap.css";
import "../css/styles.css";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import GetChecked from "./pages/get-checked";
import Home from "./pages/index";
import Price from "./pages/price";
import PrivacyPolicy from "./pages/privacy-policy";
import WhyTrt from "./pages/why-trt";

function App() {
	return (
		<div className="App">
			<About/>
			<Blog/>
			<Contact/>
			<GetChecked />
			<Home />
			<Price/>
			<PrivacyPolicy/>
			<WhyTrt/>
		</div>
	);
}

export default App;
