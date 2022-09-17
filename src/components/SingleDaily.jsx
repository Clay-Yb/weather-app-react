import React from "react";
import { useState } from "react";
import "./SingleDaily.scss";
const SingleDaily = ({
	formattedDay,
	clouds,
	description,
	feels_like,
	humidity,
	icon,
	pressure,
	temp,
	wind_speed,
	id
}) => {
	const [isShow, setIsShow] = useState(false);
	return (
		<div className="card" onClick={() => setIsShow(!isShow)}>
			<div className="card_container">
				<div className="left_side">
					<img
						src={`http://openweathermap.org/img/wn/${icon}.png`}
						alt="icon"
					/>
					<h3>{formattedDay[id]}</h3>
				</div>
				<div className="right_side">
					<span className="des">{description}</span>
					<span className="temp">
						{temp}°C/{feels_like}°C
					</span>
				</div>
			</div>
			<div className={`drop_down ${isShow ? "active" : ""}`}>
				<div className="drop_down-box">
					<div className="drop_down-box-left">
						<p>Pressure</p>
						<span>{pressure}hPa</span>
					</div>
					<div className="drop_down-box-right">
						<p>Humidity</p>
						<span>{humidity}%</span>
					</div>
				</div>
				<div className="drop_down-box">
					<div className="drop_down-box-left">
						<p>Clouds</p>
						<span>{clouds}%</span>
					</div>
					<div className="drop_down-box-right">
						<p>Wind Speed</p>
						<span>{wind_speed}m/s</span>
					</div>
				</div>
				<div className="drop_down-box">
					<div className="drop_down-box-left">
						<p>Temp</p>
						<span>{temp}°C</span>
					</div>
					<div className="drop_down-box-right">
						<p>Feel_like</p>
						<span>{feels_like}°C</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleDaily;
