import baseAccuWeatherApiRequest from '../base';

const path = 'locations/v1/cities/autocomplete';

export const fetchLocations = async query => {
	try {
		const response = await baseAccuWeatherApiRequest().get(path, {
			params: {
				apikey: 'rU8IbzfUaTSX7cMv5ls2lRodrCJgCbu9',
				q: query,
				language: 'en-us'
			}
		});

		return response;
	} catch (error) {
		throw new Error(error);
	}
};
