import React from 'react';
import styled from 'styled-components';
import appBackground from '../../assets/appBackground.jpg';
import HeaderNavbar from './HeaderNavbar';

const Layout = ({ children }) => {
	return (
		<Container>
			<HeaderNavbar />
			<Content>{children}</Content>
		</Container>
	);
};

const Content = styled.div`
	min-height: 100vh;
	height: fit-content;
`;
const Container = styled.div`
	content: '';
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-image: url(${appBackground});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;

export default Layout;
