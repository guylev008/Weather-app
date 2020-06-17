import {
	startFetchingForecast,
	fetchingForecastSuccess,
	fetchingFavoritesForecastSuccess
} from './actions';
import {
	fetchCurrentWeatherForecast,
	fetchWeeklyWeatherForecast
} from '../../api/forecast/forecast';

const fetchCurrentForecast = async location => {
	try {
		return await fetchCurrentWeatherForecast(location);
	} catch (error) {
		throw new Error(error);
	}
};

const fetchWeeklyForecast = async (location, isMetric) => {
	try {
		return await fetchWeeklyWeatherForecast(location, isMetric);
	} catch (error) {
		throw new Error(error);
	}
};

export const fetchFavoritesForecast = locations => async dispatch => {
	dispatch(startFetchingForecast());
	const forecasts = await Promise.all(
		locations.map(async location => {
			const response = await (await fetchCurrentForecast(location)).data[0];

			return {
				id: location.id,
				name: location.name,
				country: location.country,
				weatherText: response.WeatherText,
				temperature: response.Temperature
			};
		})
	);
	dispatch(fetchingFavoritesForecastSuccess(forecasts));
};

export const fetchWeatherForecast = (location, isMetric) => async dispatch => {
	dispatch(startFetchingForecast());
	// const currentForecast = {
	// 	WeatherText: 'Sunny',
	// 	WeatherIcon: '1',
	// 	Temperature: {
	// 		Metric: {
	// 			Value: 35
	// 		}
	// 	}
	// };
	const currentForecast = await (await fetchCurrentForecast(location)).data[0];
	const weeklyForecast = await (await fetchWeeklyForecast(location, isMetric))
		.data;
	// const weeklyForecast = [
	// 	{
	// 		Date: '2020-06-16T07:00:00+03:00',
	// 		Temperature: { Minimum: { Value: 30 }, Maximum: { Value: 35 } }
	// 	},
	// 	{
	// 		Date: '2020-06-16T07:00:00+03:00',
	// 		Temperature: { Minimum: { Value: 30 }, Maximum: { Value: 35 } }
	// 	},
	// 	{
	// 		Date: '2020-06-16T07:00:00+03:00',
	// 		Temperature: { Minimum: { Value: 30 }, Maximum: { Value: 35 } }
	// 	},
	// 	{
	// 		Date: '2020-06-16T07:00:00+03:00',
	// 		Temperature: { Minimum: { Value: 30 }, Maximum: { Value: 35 } }
	// 	},
	// 	{
	// 		Date: '2020-06-16T07:00:00+03:00',
	// 		Temperature: { Minimum: { Value: 30 }, Maximum: { Value: 35 } }
	// 	}
	// ];

	const forecast = { currentForecast, weeklyForecast };
	dispatch(fetchingForecastSuccess(forecast));
};
