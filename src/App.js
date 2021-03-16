/** @format */

import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
	return (
		<Router>
			<Navbar></Navbar>
			<div>
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/about" component={About}></Route>
					<Route
						path="/cocktail/:id"
						exact
						component={SingleCocktail}></Route>
					<Route path="*" exact component={Error}></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
