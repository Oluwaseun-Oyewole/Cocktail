/** @format */
import React, { useState } from "react";

const url =
	"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("a");
	const [cockTails, setCocktails] = useState([]);

	const fetchDrinks = async () => {
		setLoading(true);
		try {
			const response = await fetch(`${url} ${searchTerm}`);
			const data = await response.json();

			const { drinks } = data;
			if (drinks) {
				const newDrinks = drinks.map((item) => {
					const {
						idDrink,
						strDrink,
						strDrinkThumb,
						strAlchoholic,
						strGlass,
					} = item;
					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						info: strAlchoholic,
						glass: strGlass,
					};
				});
				setCocktails(newDrinks);
			} else {
				setCocktails([]);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	React.useEffect(() => {
		fetchDrinks();
	}, [searchTerm]);

	return (
		<AppContext.Provider
			value={{
				loading,
				cockTails,
				setCocktails,
				setSearchTerm,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return React.useContext(AppContext);
};

export { AppContext, AppProvider };
