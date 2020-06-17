import types from './types';

export const startFetchingForecast = () => ({
	type: types.START_FETCH_FORECAST
});
export const fetchingForecastSuccess = forecast => ({
	type: types.FETCH_FORECAST_SUCCESS,
	forecast
});

export const fetchingFavoritesForecastSuccess = forecasts => ({
	type: types.FETCH_FAVORITES_FORECAST_SUCCESS,
	forecasts
});

export const setCurrentLocation = location => ({
	type: types.SET_CURRENT_LOCATION,
	location
});

export default {
	startFetchingForecast,
	fetchingForecastSuccess
};
