/** @format */

import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
	const { cockTails, loading } = useGlobalContext();
	if (loading) {
		return <Loading></Loading>;
	}
	if (cockTails.length < 1) {
		return (
			<h2 className="section-title">
				no cocktail match your search criteria
			</h2>
		);
	}
	return (
		<div>
			<h2>cocktail list component</h2>
		</div>
	);
};

export default CocktailList;
