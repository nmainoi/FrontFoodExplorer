import  styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    background: ${({theme}) => theme.COLORS.DARK_900};
`;

export const Link = styled.a`

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    
`;