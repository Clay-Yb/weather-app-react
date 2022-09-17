import React from "react";
import "./DailyWeatherDetail.scss";
import SingleDaily from "./SingleDaily";
const DailyWeatherDetail = ({ formattedDay, foreCastWeather }) => {
	return (
		<>
			{foreCastWeather.map((item, id) => (
				<SingleDaily key={id} formattedDay={formattedDay} id={id} {...item} />
			))}
		</>
	);
};

export default DailyWeatherDetail;
