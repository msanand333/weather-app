'use client';
import React, { useRef, useState } from 'react';
import { WeatherInfo } from '../appContext';

const API_KEY = 'b92068d212a2482cbc7123447230409';

function SearchBox() {
	const { setWeatherData, setErrorMessage } = React.useContext(WeatherInfo);
	const [cityInput, setCityInput] = useState<string>('');
	const cityName = useRef<HTMLInputElement>(null);
	const getWeatherData = async () => {
		try {
			const serverResponse = await fetch(
				`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityInput}&aqi=yes`,
			);
			const data = await serverResponse.json();

			if (data.error?.code === 1006) throw data;
			setWeatherData(data);
		} catch (err: any) {
			setErrorMessage(err.error?.message);
			setWeatherData({});
		}
	};

	return (
		<div className="w-full text-center">
			<div>
				<label htmlFor="city-name"></label>
				<input
					name="city-name"
					type="text"
					placeholder="Enter name of city"
					className="mb-4 w-full rounded-md border-2 p-2"
					ref={cityName}
					onChange={(e) => {
						setCityInput(e.target.value);
						setErrorMessage('');
						setWeatherData({});
					}}
				/>
			</div>
			<button
				onClick={getWeatherData}
				className=" rounded-3xl bg-black px-4 py-2 text-xs text-white"
			>
				Search
			</button>
		</div>
	);
}

export default SearchBox;
