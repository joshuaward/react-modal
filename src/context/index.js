import { createContext, useState } from "react";
import axios from 'axios';

const Context = createContext();

function Provider({ children }) {
	const endpoint = 'https://api.openbrewerydb.org/v1/breweries?by_state=minnesota&by_type=micro&per_page=200';
	const [data, setData] = useState([]);

	const getData = async () => {
		const response = await axios.get(endpoint);
		console.log(response.data);

		setData(response.data);
	}

	const values = {
		getData,
		data
	}

	return (
		<Context.Provider value={values}>
			{ children }
		</Context.Provider>
	)
}

export { Provider };
export default Context;