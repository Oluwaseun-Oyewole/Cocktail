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
			<h4
				className="section-title"
				style={{ fontSize: "17px" }}>
				no cocktail match your search criteria
			</h4>
		);
	}
	return (
		<section className="section">
			<h3
				className="section-title"
				style={{ fontSize: "18px" }}>
				cocktails
			</h3>
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
