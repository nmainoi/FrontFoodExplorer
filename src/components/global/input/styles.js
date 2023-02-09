import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    
    gap : .5rem;
`;

export const Input = styled.input`

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background: ${({theme}) => theme.COLORS.DARK_900};
    border: none;
    border-radius: .5rem;
    font-family: 'Roboto';
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 100%;
    padding: .75rem .875rem;


      width: 100%;

    height: 100%;

    max-height: 3.6rem;



    &::placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    }

  
`;


export const Label = styled.label`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 100%;
   color: ${({theme}) => theme.COLORS.LIGHT_400};
`;

