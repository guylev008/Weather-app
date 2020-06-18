import baseAccuWeatherApiRequest from '../base';

export const fetchCurrentWeatherForecast = async location => {
	const path = 'currentconditions/v1/';
	try {
		const response = await baseAccuWeatherApiRequest().get(
			path + `${location.id}`,
			{
				params: {
					apikey: 'SwYr4o6k2aWAJ9Lj5mNBWKgAHyh6iViO',
					details: true,
					language: 'en-us'
				}
			}
		);
		return response;
	} catch (error) {
		throw new Error(error);
	}
};

export const fetchWeeklyWeatherForecast = async (location, isMetric) => {
	const path = 'forecasts/v1/daily/5day/';
	try {
		const response = await baseAccuWeatherApiRequest().get(
			path + `${location.id}`,
			{
				params: {
					apikey: 'SwYr4o6k2aWAJ9Lj5mNBWKgAHyh6iViO',
					details: true,
					language: 'en-us',
					metric: isMetric
				}
			}
		);
		return response;
	} catch (error) {
		throw new Error(error);
	}
};
