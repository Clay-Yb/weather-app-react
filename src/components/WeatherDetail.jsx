import React from "react";
import "./WeatherDetail.scss";
import DailyWeatherDetail from "./DailyWeatherDetail";
import { useGlobalContext } from "../provider/ContextProvider";
const days = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];
const WeatherDetail = () => {
	const { weather, weatherLoading, show, foreCastWeather } = useGlobalContext();
	const currentday = new Date().getDay();
	const formattedDay = days.slice(currentday).concat(days.slice(0, currentday));

	if (weatherLoading) {
		return (
			<div className="weather_container container">
				<h3 className="loading">Loading...</h3>
			</div>
		);
	}
	if (show) {
		const {
			name,
			country,
			description,
			feels_like,
			humidity,
			icon,
			pressure,
			speed,
			temp
		} = weather;
		return (
			<div className="weather_container container">
				<div className="weather_card">
					<div className="weather_card-header">
						<div className="weather_card-name">
							<h3>
								{name}, {country}
							</h3>
							<p>{description}</p>
						</div>
						<img
							src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
							alt="icon"
						/>
					</div>
					<div className="weather_card-body">
						<h1>{temp}°C</h1>
						<div className="weather_card-details">
							<p>Details</p>
							<div className="weather_card-details-box">
								<p>Feel like</p>
								<p>{feels_like}°C</p>
							</div>
							<div className="weather_card-details-box">
								<p>Wind</p>
								<p>{speed}m/s</p>
							</div>
							<div className="weather_card-details-box">
								<p>Humidity</p>
								<p>{humidity}%</p>
							</div>
							<div className="weather_card-details-box">
								<p>Pressure</p>
								<p>{pressure}hPa</p>
							</div>
						</div>
					</div>
				</div>
				<div className="daily_weather">
					<h2>Daily</h2>
					<DailyWeatherDetail
						formattedDay={formattedDay}
						foreCastWeather={foreCastWeather}
					/>
				</div>
			</div>
		);
	}
};

export default WeatherDetail;
