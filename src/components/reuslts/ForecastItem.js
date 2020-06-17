import React from 'react';
import styled from 'styled-components';
import SmallLabel from '../common/SmallLabel';
import Text from '../common/Text';
import device from '../../responsive/device';

const ForecastItem = props => {
	const { minTemperature, maxTemperature, date } = props;

	return (
		<ForecastWrapper>
			<Text align='center'>{date}</Text>
			<SmallLabel align='center' weight='400'>
				{minTemperature}-{maxTemperature}&#176;
			</SmallLabel>
		</ForecastWrapper>
	);
};

const ForecastWrapper = styled.div`
	flex-shrink: 0;
	flex-basis: 90px;
	padding: 10px;
	margin: 0 5px;
	border-radius: 5px;
	background-color: rgba(255, 255, 255, 0.2);
	&:first-child {
		margin-left: 0;
	}
	&:last-child {
		margin-right: 0;
	}
	@media ${device.tablet} {
		flex-basis: 110px;
	}
	@media ${device.laptop} {
		flex-basis: 165px;
	}
	@media ${device.laptopL} {
		flex-basis: 165px;
	}
`;

export default ForecastItem;
