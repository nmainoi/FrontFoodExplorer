

import styled from "styled-components";



export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;

`;

export const Button = styled.div`
 background-color: ${({ theme }) => theme.COLORS.RED_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    right: -12px;
    top: -10px;

`;