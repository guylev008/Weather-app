import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import device from '../../responsive/device';
import Search from '../common/Search';
import { currentLocation, selectedWeather, selectedWeeklyWeather, isMetric, isFetchingData } from '../../state/forecast/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocations } from '../../api/autocomplete/autocomplete';
import { fetchWeatherForecast } from '../../state/forecast/operations';
import { setCurrentLocation } from '../../state/forecast/actions';
import Result from '../reuslts/Result';

const HomePage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [options, setOptions] = useState([]);
	const dispatch = useDispatch();

	const location = useSelector(currentLocation);
	const currentweather = useSelector(selectedWeather);
	const weeklyForecast = useSelector(selectedWeeklyWeather);
	const isMetricType = useSelector(isMetric);
	const isFetching = useSelector(isFetchingData);

	useEffect(() => {
		if (location) dispatch(fetchWeatherForecast(location, isMetricType));
	}, [location, dispatch, isMetricType]);

	const handleSearch = useCallback(async query => {
		setIsLoading(true);
		const response = await fetchLocations(query);
		const options = response.data.map(i => ({
			id: i.Key,
			name: i.LocalizedName,
			country: i.Country.ID
		}));

		setOptions(options);
		setIsLoading(false);
	}, []);

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			const location = options.find(o => o.name.toLowerCase() === e.target.value.toLowerCase());
			if (!location) return;
			dispatch(setCurrentLocation(location));
			dispatch(fetchWeatherForecast(location, isMetricType));
		}
	};
	return (
		<Page>
			<WeatherWrapper>
				<Search handleSearch={handleSearch} handleKeyDown={handleKeyDown} isLoading={isLoading} options={options} />
				{!isFetching && <Result forecastLocation={location} weather={currentweather} weeklyWeather={weeklyForecast} />}
			</WeatherWrapper>
		</Page>
	);
};

const Page = styled.div`
	height: calc(100vh - 64px);
	position: relative;
	margin-left: 15px;
	margin-right: 15px;

	@media ${device.tablet || device.laptop || device.laptopL || device.desktop} {
		width: 100%;
	}
`;

const WeatherWrapper = styled.div`
	max-width: 1500px;
	margin: 0 auto;
	height: calc(100vh - 460px);
	width: 100%;
	position: relative;
`;

export default HomePage;
