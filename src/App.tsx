import { Button, Image } from "@chakra-ui/core";
import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import { Box } from "@chakra-ui/core";
import {Layout} from './layouts/Layout'

function App() {
	const [data, setData] = useState<AxiosResponse | null>(null);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				"http://railtracks-api.herokuapp.com/api/v1/tests"
			);
			console.log(response);
			setData(response.data);
		} catch (error) {
			console.error(error);
		}
	};
	// <Button variantColor="blue" onClick={fetchData}>
	//   show data
	// </Button>

	return (
		<Layout>
			<Route path="/" component={} />
		</Layout>
	);
}

export default App;
