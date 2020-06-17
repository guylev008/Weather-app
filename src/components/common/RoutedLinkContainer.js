import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

const RoutedLinkContainer = props => {
	return (
		<LinkContainer to={props.link}>
			<Nav.Link>{props.displayText}</Nav.Link>
		</LinkContainer>
	);
};

export default RoutedLinkContainer;
