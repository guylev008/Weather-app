import React from 'react';
import styled from 'styled-components';
import routes from '../../appRoutes';
import { LinkContainer } from 'react-router-bootstrap';
import SmallLabel from '../common/SmallLabel';
import Text from '../common/Text';
import device from '../../responsive/device';

const FavoriteItem = props => {
	const { temperature, text, name, id, country, handleClick } = props;
	return (
		<LinkContainer to={routes.home}>
			<ForecastWrapper onClick={() => handleClick(id)}>
				<Text fontSize={'32px'} align='center'>
					{name}, {country}
				</Text>
				<SmallLabel fontSize={'26px'} align='center' weight='400'>
					{temperature}&#176;
				</SmallLabel>
				<SmallLabel fontSize={'26px'} align='center' weight='400'>
					{text}
				</SmallLabel>
			</ForecastWrapper>
		</LinkContainer>
	);
};

const ForecastWrapper = styled.div`
	flex-shrink: 0;
	flex-basis: 90px;
	padding: 10px;
	margin: 0 5px;
	cursor: pointer;
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
		flex-basis: 125px;
	}
	@media ${device.laptopL} {
		flex-basis: 300px;
	}
`;

export default FavoriteItem;
