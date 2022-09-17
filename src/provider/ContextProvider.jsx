import React, { useEffect } from "react";
import { useState } from "react";
import { useContext, createContext } from "react";
import {
	getPlaceData,
	getWeather,
	getOneCallWeather
} from "../apis/MapWeather";

const AppContext = createContext();

export const useGlobalContext = () => {
	return useContext(AppContext);
};

const ContextProvider = ({ children }) => {
	const [cities, setCities] = useState([]);
	const [loading, setLoading] = useState(false);
	const [weatherLoading, setWeatherLoading] = useState(false);
	const [show, setShow] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [weather, setWeather] = useState([]);
	const [foreCastWeather, setForeCastWeather] = useState([]);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			if (searchTerm) {
				setLoading(true);
				getPlaceData(searchTerm).then((data) => {
					const formattedData = data?.map((item) => {
						const { city, countryCode, latitude, longitude } = item;

						return { city, countryCode, latitude, longitude };
					});
					setCities(formattedData);
					setLoading(false);
				});
			}
		}, 1000);
		return () => clearTimeout(timeOut);
	}, [searchTerm]);

	const handleClick = (lat, lon, name, code) => {
		setShow(true);
		setSearchTerm(`${name}, ${code}`);
		setCities([]);
		setWeatherLoading(true);
		getWeather(lat, lon).then((data) => {
			const {
				main: { feels_like, humidity, pressure, temp },
				name,
				sys: { country },
				wind: { speed },
				weather
			} = data;
			const { description, icon } = weather[0];
			const formattedWeather = {
				feels_like,
				humidity,
				pressure,
				temp,
				name,
				country,
				speed,
				description,
				icon
			};
			setWeather(formattedWeather);
			setWeatherLoading(false);
		});
		getOneCallWeather(lat, lon).then((data) => {
			const formattedForecastWeather = data.hourly.splice(0, 7).map((item) => {
				const {
					temp,
					feels_like,
					humidity,
					pressure,
					weather,
					wind_speed,
					clouds,
					rain
				} = item;
				const { description, icon } = weather[0];
				return {
					temp,
					feels_like,
					humidity,
					pressure,
					wind_speed,
					clouds,
					rain,
					description,
					icon
				};
			});
			setForeCastWeather(formattedForecastWeather);
		});
	};

	const value = {
		searchTerm,
		setSearchTerm,
		loading,
		cities,
		handleClick,
		weather,
		weatherLoading,
		show,
		foreCastWeather
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContextProvider;
