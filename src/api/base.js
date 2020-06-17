import axios from 'axios';

const baseAccuWeatherApiRequest = () => {
	return axios.create({
		baseURL: 'http://dataservice.accuweather.com/',
		timeout: 3000
	});
};

export default baseAccuWeatherApiRequest;
