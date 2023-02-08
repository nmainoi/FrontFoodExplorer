import styled from "styled-components";

export const Wrapper = styled.div`

   padding-top: 9.9375rem;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.DARK_100};

    gap: 4.5625rem;

    @media (width > 800px) {
        flex-direction: row;
        justify-content: space-around;
        justify-items: center;
    }
`;


export const InputWrapper = styled.div`

    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    max-width: 316px;
    align-items: center;


    @media (width > 800px) {
        background-color: ${({theme}) => theme.COLORS.DARK_700};
        max-height: 621px;
        border-radius: 8px;
        padding: 64px;
        max-width: 476px;
        gap: 32px;
    }

`;


export const Title = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 140%;
/* or 45px */



/* Light/Light 100 */

color: ${({theme}) => theme.COLORS.LIGHT_100};

display: none;
  
  @media (min-width: 800px) {
    display: flex;
  }

`;
