import styled from 'styled-components';
import device from '../../responsive/device';

const SmallLabel = styled.h4`
  color: ${props => props.theme.colors.white};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${props => props.theme.fontSizes.fontSize4};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
		firstToUpperCase &&
		`
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fontSize2};
  }
  @media ${device.laptop} {
    font-size: ${props => props.theme.fontSizes.fontSize1};
  } 
  @media ${device.laptopL} {
    font-size: ${props => props.theme.fontSizes.fontSize3};
  }
`;

export default SmallLabel;
