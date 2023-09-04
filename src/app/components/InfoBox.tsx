import React from 'react';
import { WeatherInfo } from '../appContext';

function InfoBox() {
	const { weatherInfo } = React.useContext(WeatherInfo);
	console.log(weatherInfo);

	return Object.keys(weatherInfo).length !== 0 ? (
		<div>
			<p>{weatherInfo.location.name} weather</p>
			<p>Currently {weatherInfo.current.temp_c} °C</p>
		</div>
	) : null;
}

export default InfoBox;
