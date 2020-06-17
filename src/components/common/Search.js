import React from 'react';
import styled from 'styled-components';
import device from '../../responsive/device';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

const Search = props => {
	return (
		<SearchWrapper>
			<Input
				id='cities-autocomplete'
				isLoading={props.isLoading}
				filterBy={['name']}
				labelKey='name'
				onSearch={props.handleSearch}
				onKeyDown={props.handleKeyDown}
				options={props.options}
				placeholder='Search for a city...'
				renderMenuItemChildren={option => {
					return (
						<div>
							<span>{option.name}</span>
						</div>
					);
				}}
			/>
		</SearchWrapper>
	);
};

const Input = styled(AsyncTypeahead)`
	@media ${device.laptopL} {
		width: 600px;
	}
	@media ${device.desktop} {
		width: 700px;
	}

	@media ${device.tablet} {
		font-size: 18px;
	}
	@media ${device.laptop} {
		padding: 15px 20px 15px 45px;
		border-radius: 30px;
	}
`;

const SearchWrapper = styled.div`
	margin: 8.5rem auto 0 auto;
	max-width: 500px;
	transition: 0.8s 0.5s;

	@media ${device.laptopL} {
		max-width: 600px;
	}
	@media ${device.desktop} {
		max-width: 700px;
	}
`;

export default Search;
