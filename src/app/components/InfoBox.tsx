import React from 'react';
import { WeatherInfo } from '../appContext';

function InfoBox() {
	const { weatherData, errorMessage } = React.useContext(WeatherInfo);

	return Object.keys(weatherData).length !== 0 ? (
		<div>
			<p>{weatherData.location.name} weather</p>
			<p>Currently {weatherData.current.temp_c} °C</p>
		</div>
	) : (
		<div>
			<p>{errorMessage}</p>
		</div>
	);
}

export default InfoBox;
