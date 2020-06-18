import React, { useEffect } from 'react';
import styled from 'styled-components';
import store from 'store';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLocation } from '../../state/forecast/actions';
import { fetchFavoritesForecast } from '../../state/forecast/operations';
import { selectedFavoritesWeather } from '../../state/forecast/selectors';
import device from '../../responsive/device';
import FavoriteItem from './FavoriteItem';
import BigLabel from '../common/BigLabel';

const FavoritesPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		let items = [];
		store.each(i => {
			items.push(i);
		});
		if (items.length > 0) dispatch(fetchFavoritesForecast(items));
	}, [dispatch]);

	const onClick = id => {
		let location = store.get(id);
		dispatch(setCurrentLocation(location));
	};
	const favorites = useSelector(selectedFavoritesWeather);

	return (
		<Page>
			<PageTitle>
				<BigLabel>Favorites</BigLabel>
			</PageTitle>
			{favorites && (
				<ItemsWrapper>
					{favorites.map((item, index) => (
						<FavoriteItem
							key={index}
							id={item.id}
							name={item.name}
							country={item.country}
							temperature={item.temperature}
							text={item.weatherText}
							handleClick={onClick}
						/>
					))}
				</ItemsWrapper>
			)}
		</Page>
	);
};

const Page = styled.div`
	display: flex;
	flex-direction: column;
	height: calc(100vh - 64px);
	position: relative;
	padding-left: 60px;
	padding-right: 60px;

	@media ${device.tablet || device.laptop || device.laptopL || device.desktop} {
		width: 100%;
	}
`;

const ItemsWrapper = styled.div`
	justify-content: center;
	align-self: center;
	align-items: center;
	display: flex;
	flex-direction: row;
	flex-grow: 1;
	align-content: center;
`;

const PageTitle = styled.div`
	display: flex;
	justify-content: center;
	top: 10%;
	position: relative;
`;

export default FavoritesPage;
