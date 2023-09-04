'use client';
import Image from 'next/image';
import SearchBox from './components/SearchBox';
import { WeatherInfo } from './appContext';
import InfoBox from './components/InfoBox';
import React from 'react';
export default function Home() {
	const [weatherInfo, setWeatherInfo] = React.useState<any>({});
	// const [errorMessage, setErrorMessage] = React.useState<string>('');

	const values = {
		weatherInfo,
		setWeatherInfo,
	};
	return (
		<main className="flex min-h-screen items-center justify-center bg-hero-bg bg-cover bg-no-repeat text-gray-900">
			<div className="w-full max-w-lg rounded-lg bg-white p-4">
				<h6 className="text-lg">Get The Weather!</h6>
				<p className="mb-4 text-xs">
					Enter the city name and get the weather below
				</p>
				<WeatherInfo.Provider value={values}>
					<SearchBox />
					<InfoBox />
				</WeatherInfo.Provider>
			</div>
		</main>
	);
}
