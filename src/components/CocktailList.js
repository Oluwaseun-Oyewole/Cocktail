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
		<section className="section">
			<h2 className="section-title">cocktails</h2>
			<div className="cocktails-center">
				{cockTails.map((item) => {
					const { id } = item;
					return <Cocktail key={id} {...item}></Cocktail>;
				})}
			</div>
		</section>
	);
};

export default CocktailList;

// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
