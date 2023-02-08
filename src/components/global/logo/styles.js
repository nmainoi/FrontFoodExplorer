import styled from "styled-components";

export const Container = styled.div`

    display: flex;

    align-items: center;
    justify-content: center;

    gap : 10px;

`;

export const Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size:  ${props => props.size ? props.size : '37.2432px'};



    color: #FFFFFF;
`;
