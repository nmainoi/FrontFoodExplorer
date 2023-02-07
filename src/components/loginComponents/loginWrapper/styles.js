import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.DARK_900};

    gap: 4.5625rem;
`;


export const InputWrapper = styled.div`

    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;

`;
