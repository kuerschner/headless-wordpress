import React, {useState} from "react";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import GetChecked from "./pages/get-checked";
import Home from "./pages/index";
import Price from "./pages/price";
import PrivacyPolicy from "./pages/privacy-policy";
import WhyTrt from "./pages/why-trt";
import Members from "./pages/members";
import "./css/bootstrap-grid.css";
import "./css/bootstrap.css";
import "./App.css";
import ReactGA from 'react-ga';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

ReactGA.initialize('UA-157140327-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

	const [activeMenuItem, setActiveMenuItem] = useState('')

	return (
		<div className="App">
			<Router>
				<Switch>
          			<Route exact path="/">
						<Home activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
					</Route>
					<Route exact path="/testosterone-replacement-therapy">
						<WhyTrt activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
					</Route>
					<Route exact path="/get-checked">
						<GetChecked activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem}/>
					</Route>
					<Route exact path="/price">
						<Price activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
					</Route>
					<Route exact path="/blog">
						<Blog activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
					</Route>
					<Route exact path="/about">
						<About activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
					</Route>
					<Route exact path="/contact">
						<Contact activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
					</Route>
					<Route exact path="/members">
						<Members activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
					</Route>
					<Route exact path="/privacy-policy">
						<PrivacyPolicy activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
