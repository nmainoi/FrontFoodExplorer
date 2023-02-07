import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`

    color: ${({theme}) => theme.COLORS.LIGHT_100};
`;


export const Label = styled.label`
  color: ${({theme}) => theme.COLORS.LIGHT_100};
`;

