/** @format */

import React, {
	useState,
	useContext,
	useEffect,
} from "react";
import { useCallback } from "react";

const url =
	"https://www.theco cktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("a");
	const [cockTails, setCockTails] = useState([]);
	const fetchDrinks = async () => {
		try {
			setLoading(true);
			const response = await fetch(
				`{${url} ${searchTerm}}`
			);
			const data = await response.json();
			const { drinks } = data;
			if (drinks) {
				const newCockTails = drinks.map((item) => {
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
				setCockTails(newCockTails);
			} else {
				setCockTails([]);
			}
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchDrinks();
	}, [searchTerm]);

	return (
		<AppContext.Provider
			value={{
				loading,
				setSearchTerm,
				cockTails,
			}}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
