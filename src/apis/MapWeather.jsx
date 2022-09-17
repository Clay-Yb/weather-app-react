import axios from "axios";
const ApiKey = "81a250102cd3e7b72ba8b71aa2e30c7a";
const Url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
const Weather_URl = "https://api.openweathermap.org/data/2.5/weather";
const daily_url = "https://api.openweathermap.org/data/2.5/onecall";
export const getPlaceData = async (searchTerm) => {
	try {
		const {
			data: { data }
		} = await axios.get(Url, {
			params: { namePrefix: searchTerm },
			headers: {
				"X-RapidAPI-Key": "6ee8993f9bmsh9f6e4b2613fe121p1fae9cjsnfaf01fa9ae64",
				"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
			}
		});
		return data;
	} catch (error) {
		console.log(error.response);
	}
};

export const getWeather = async (lat, lon) => {
	try {
		const { data } = await axios(Weather_URl, {
			params: {
				lat: lat,
				lon: lon,
				appid: ApiKey,
				units: "metric"
			}
		});
		return data;
	} catch (error) {
		console.log(error.response);
	}
};

export const getOneCallWeather = async (lat, lon) => {
	try {
		const { data } = await axios(daily_url, {
			params: {
				lat: lat,
				lon: lon,
				exclude: "daily",
				appid: ApiKey,
				units: "metric"
			}
		});
		return data;
	} catch (error) {
		console.log(error.response);
	}
};
