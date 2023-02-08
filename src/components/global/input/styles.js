import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    
    gap : 8px;
`;

export const Input = styled.input`

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background: ${({theme}) => theme.COLORS.DARK_900};
    border: none;
    border-radius: 8px;
    font-family: 'Roboto';
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    padding: 12px 14px;


      width: 100%;

    height: 100%;

    max-height: 48px;



    &::placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    }

  
`;


export const Label = styled.label`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
   color: ${({theme}) => theme.COLORS.LIGHT_400};
`;

