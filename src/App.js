import React from "react";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import GetChecked from "./pages/get-checked";
import Home from "./pages/index";
import Price from "./pages/price";
import PrivacyPolicy from "./pages/privacy-policy";
import WhyTrt from "./pages/why-trt";
import "./css/bootstrap-grid.css";
import "./css/bootstrap.css";
import "./App.css";
import ReactGA from 'react-ga';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

ReactGA.initialize('UA-157140327-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
          			<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/testosterone-replacement-therapy">
						<WhyTrt/>
					</Route>
					<Route exact path="/get-checked">
						<GetChecked />
					</Route>
					<Route exact path="/price">
						<Price/>
					</Route>
					<Route exact path="/blog">
						<Blog/>
					</Route>
					<Route exact path="/about">
						<About/>
					</Route>
					<Route exact path="/contact">
						<Contact/>
					</Route>
					<Route exact path="/privacy-policy">
						<PrivacyPolicy/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
