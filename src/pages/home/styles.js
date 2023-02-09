import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;

    gap: 30px;

    @media (min-width: 800px) {

        gap: 64px;
    }
    `;