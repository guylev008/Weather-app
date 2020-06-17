/* eslint-disable eqeqeq */
import { createSelector } from 'reselect';
import moment from 'moment';
import { temperatureType } from '../../utils/enums';

export const currentLocation = state => state.forecast.currentLocation;

export const currentTemperatureType = state => state.forecast.temperatureType;

export const isMetric = createSelector(
	currentTemperatureType,
	currentTemperatureType => {
		return currentTemperatureType == temperatureType.celsius;
	}
);

export const isFetching = state => state.forecast.isFetching;

export const weather = state => state.forecast.weather;

export const weeklyWeather = state => state.forecast.weeklyWeather;

export const selectedWeather = createSelector(
	weather,
	isMetric,
	(weather, isMetric) => {
		if (!weather) return null;
		const temperature = isMetric
			? weather.Temperature.Metric.Value
			: weather.Temperature.Imperial.Value;
		const date = moment().format('dddd DD MMMM');
		return {
			date,
			weatherText: weather.WeatherText,
			iconId: weather.WeatherIcon,
			temperature
		};
	}
);

export const selectedWeeklyWeather = createSelector(
	weeklyWeather,
	weeklyWeather => {
		if (!weeklyWeather) return null;
		return weeklyWeather.DailyForecasts.map(item => {
			const date = moment(item.Date).format('DD MMM');
			return {
				date,
				minTemperature: item.Temperature.Minimum.Value,
				maxTemperature: item.Temperature.Maximum.Value
			};
		});
	}
);

export const favoritesWeather = state => state.forecast.favoritesWeather;

export const selectedFavoritesWeather = createSelector(
	favoritesWeather,
	isMetric,
	(favoritesWeather, isMetric) => {
		if (!favoritesWeather) return null;
		return favoritesWeather.map(item => {
			const temperature = isMetric
				? item.temperature.Metric.Value
				: item.temperature.Imperial.Value;
			return {
				id: item.id,
				name: item.name,
				country: item.country,
				temperature,
				weatherText: item.weatherText
			};
		});
	}
);

export const isFetchingData = createSelector(
	selectedWeeklyWeather,
	isFetching,
	(selectedWeeklyWeather, isFetching) => {
		return isFetching || !selectedWeeklyWeather;
	}
);

export default {
	currentLocation
};
