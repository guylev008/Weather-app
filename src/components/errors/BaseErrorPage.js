import styled from 'styled-components';
import appBackground from '../../assets/appBackground.jpg';

export default styled.div`
	content: '';
	text-align: center;
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	padding: 20px;
	padding-top: 10vh;
	width: 100%;
	background-image: url(${appBackground});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	& h1 {
		font-weight: bold;
	}

	& div {
		font-size: 40px;
	}
`;
