import React from 'react';
import styled from 'styled-components';
import { Button as BootstrapButton } from 'react-bootstrap';

const Button = props => {
	return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

const StyledButton = styled(BootstrapButton)`
	&: hover {
		color: ${props => props.theme.colors.white};
		background-color: ${props => props.theme.colors.gray};
		border-color: ${props => props.theme.colors.gray};
	}

	&: active {
		background-color:: ${props => props.theme.colors.red};
	}

	margin-right: 0.45rem;
	color: ${props => props.theme.colors.white};
	display: block;
	font-weight: ${({ weight }) => weight || '400'};
	font-size: ${props => props.theme.fontSizes.fontSize4};
	transition: all 0.4s;
	transition-property: all;
	transition-duration: 0.4s;
	transition-timing-function: ease;
	transition-delay: 0s;
	background-color: ${props => props.theme.colors.black};
	cursor: pointer;
	float: right !important;
	display: inline-block;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	user-select: none;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	line-height: 1.5;
	border-radius: 0.25rem;
`;

export default Button;
