import styled from "styled-components";


export const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: .75rem 2rem;
gap: .5rem;

border: none;
max-width: 19.75rem;
height: 3rem;

border-radius: 0.5rem;

color: ${({theme}) => theme.COLORS.LIGHT_100};
background: ${({theme}) => theme.COLORS.RED_100};
`;