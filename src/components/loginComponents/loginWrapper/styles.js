import styled from "styled-components";

export const Wrapper = styled.div`

    padding-top: 159px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.DARK_100};

    gap: 73px;

    @media ( width > 800px) {
        padding-top: 0;
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
    gap: 32px;

    max-width: 23.75rem;
    align-items: center;


    @media (width > 50rem) {
        background-color: ${({theme}) => theme.COLORS.DARK_700};
        max-height: 42.8125rem;
        border-radius: .5rem;
        padding: 3rem;
        max-width: 35.75rem;
        gap: 2rem;
    }

`;


export const Title = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 2rem;
line-height: 140%;
/* or 2.8125rem */



/* Light/Light 100 */

color: ${({theme}) => theme.COLORS.LIGHT_100};

display: none;
  
  @media (min-width: 50rem) {
    display: flex;
  }

`;
