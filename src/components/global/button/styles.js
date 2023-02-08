import styled from "styled-components";


export const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 32px;
gap: 8px;

border: none;



border-radius: 8px;

color: ${({ theme }) => theme.COLORS.LIGHT_100};
background: ${({ theme }) => theme.COLORS.RED_100};


font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;

width: 100%;
height: 100%;
max-height: 48px;

`;