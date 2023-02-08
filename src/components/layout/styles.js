


import styled from "styled-components";



export const Container = styled.div`

    width: 100%;
    height: 100%;
    min-height: 100vh;


`;


export const Header = styled.header`
    width: 100%;

    background-color: ${({theme}) => theme.COLORS.DARK_700};    

    display: flex;


     height: 114px;

    align-items: center;

    justify-content: space-between;

    padding: 0 28px;

`;