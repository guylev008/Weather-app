import initialState from '../initialState';
import types from './types';

export default function forecastReducer(state = initialState.forecast, action) {
	switch (action.type) {
		case types.START_FETCH_FORECAST: {
			return Object.assign({}, state, { isFetching: true });
		}

		case types.FETCH_FORECAST_SUCCESS: {
			return Object.assign({}, state, {
				weather: action.forecast.currentForecast,
				weeklyWeather: action.forecast.weeklyForecast,
				isFetching: false
			});
		}

		case types.SET_CURRENT_LOCATION: {
			return Object.assign({}, state, { currentLocation: action.location });
		}

		case types.FETCH_FAVORITES_FORECAST_SUCCESS: {
			return Object.assign({}, state, {
				favoritesWeather: action.forecasts,
				isFetching: false
			});
		}

		default:
			return state;
	}
}
