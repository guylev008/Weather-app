import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import RoutedLinkContainer from '../common/RoutedLinkContainer';
import routes from '../../appRoutes';

const HeaderNavbar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand>Weather Forecast</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<NavWrapper>
					<RoutedLinkContainer link={routes.home} displayText="Home" />
					<RoutedLinkContainer link={routes.favorites} displayText="Favorites" />
				</NavWrapper>
			</Navbar.Collapse>
		</Navbar>
	);
};

const NavWrapper = styled(Nav)`
	margin-right: auto !important;
`;

export default HeaderNavbar;
