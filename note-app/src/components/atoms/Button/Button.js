import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({theme}) => theme.primary };
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-size: 16px;
  text-transform: uppercase;
  padding: 0;
  font-weight: 600;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({theme}) => theme.gray200 };;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
