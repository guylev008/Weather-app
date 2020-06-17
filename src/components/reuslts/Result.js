/* eslint-disable eqeqeq */
import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import store from 'store';
import device from '../../responsive/device';
import { ResultFadeIn } from '../Animations';
import BigLabel from '../common/BigLabel';
import SmallLabel from '../common/SmallLabel';
import ForecastItem from './ForecastItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCloud,
	faBolt,
	faCloudRain,
	faCloudShowersHeavy,
	faSnowflake,
	faSun,
	faSmog
} from '@fortawesome/free-solid-svg-icons';

const Result = props => {
	let weatherIcon = null;
	if (props.weather.iconId == 15) {
		weatherIcon = <FontAwesomeIcon icon={faBolt} />;
	} else if (props.weather.iconId == 12) {
		weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
	} else if (props.weather.iconId == 18) {
		weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
	} else if (props.weather.iconId == 22) {
		weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
	} else if (props.weather.iconId == 1) {
		weatherIcon = <FontAwesomeIcon icon={faSun} />;
	} else if (props.weather.iconId == 7) {
		weatherIcon = <FontAwesomeIcon icon={faCloud} />;
	} else {
		weatherIcon = <FontAwesomeIcon icon={faSmog} />;
	}

	const addToFavorites = id => {
		store.set(id, {
			id: props.forecastLocation.id,
			name: props.forecastLocation.name,
			country: props.forecastLocation.country
		});
	};

	const removeFromFavorites = id => {
		store.remove(id);
	};

	return (
		<Results>
			<LocationWrapper>
				<BigLabel>
					{props.forecastLocation.name}, {props.forecastLocation.country}
				</BigLabel>
				<SmallLabel weight={400}>{props.weather.date}</SmallLabel>
				<ButtonWrapper>
					<Button onClick={() => addToFavorites(props.forecastLocation.id)}>
						Add to favorites
					</Button>
					<Button
						onClick={() => removeFromFavorites(props.forecastLocation.id)}>
						Remove from favorites
					</Button>
				</ButtonWrapper>
			</LocationWrapper>
			<CurrentWeatherWrapper>
				<WeatherIcon>{weatherIcon}</WeatherIcon>
				<TemperatureWrapper>
					{props.weather && (
						<React.Fragment>
							<Temperature>{props.weather.temperature + '\u00b0'}</Temperature>
							<SmallLabel weight={400}>{props.weather.weatherText}</SmallLabel>
						</React.Fragment>
					)}
				</TemperatureWrapper>
			</CurrentWeatherWrapper>
			<ForecastWrapper>
				{props.weeklyWeather && (
					<Forecast>
						{props.weeklyWeather.map((item, index) => {
							return (
								<ForecastItem
									key={index}
									minTemperature={item.minTemperature}
									maxTemperature={item.maxTemperature}
									date={item.date}
								/>
							);
						})}
					</Forecast>
				)}
			</ForecastWrapper>
		</Results>
	);
};

const Results = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 40px 0;
	opacity: 0;
	visibility: hidden;
	position: relative;
	top: 20px;
	animation: ${ResultFadeIn} 0.5s 1.4s forwards;
`;

const LocationWrapper = styled.div`
	flex-basis: 100%;
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const CurrentWeatherWrapper = styled.div`
	flex-basis: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
	@media ${device.mobileL} {
		flex-basis: 50%;
		padding-right: 10px;
	}
	@media ${device.tablet} {
		padding-right: 20px;
	}
`;

const WeatherIcon = styled.div`
	display: flex;
	justify-content: center;
	margin-right: 30px;
	align-items: center;
	font-size: 70px;
	color: #ffffff;
	@media ${device.tablet} {
		font-size: 100px;
		justify-content: flex-end;
	}
	@media ${device.laptop} {
		font-size: 120px;
	}
	@media ${device.laptopL} {
		font-size: 140px;
	}
`;

const TemperatureWrapper = styled.div``;

const Temperature = styled.h3`
	display: block;
	font-size: 50px;
	font-weight: 400;
	color: #ffffff;
	@media ${device.tablet} {
		font-size: 70px;
	}
	@media ${device.laptop} {
		font-size: 90px;
	}
	@media ${device.laptopL} {
		font-size: 110px;
	}
`;

const ForecastWrapper = styled.div`
	flex-basis: 100%;
	margin: 20px 0;
	overflow: hidden;
`;

const Forecast = styled.div`
	justify-content: center;
	position: relative;
	display: flex;
	overflow-y: hidden;
	margin-top: 20px;
	padding-bottom: 20px;
	@media ${device.laptop} {
		order: 4;
	}
`;

export default Result;
