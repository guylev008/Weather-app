import baseAccuWeatherApiRequest from '../base';

const path = 'locations/v1/cities/autocomplete';

export const fetchLocations = async query => {
	try {
		const response = await baseAccuWeatherApiRequest().get(path, {
			params: {
				apikey: 'SwYr4o6k2aWAJ9Lj5mNBWKgAHyh6iViO',
				q: query,
				language: 'en-us'
			}
		});

		return response;
	} catch (error) {
		throw new Error(error);
	}
};
