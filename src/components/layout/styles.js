


import styled from "styled-components";



export const Container = styled.div`

    width: 100%;

     height: 100vh;


    

    display: grid;

    grid-template-rows: 100px auto;
    overflow-x: hidden;
    grid-template-areas:
    "header"
    "content";


`;


export const Header = styled.header`
    width: 100%;

    background-color: ${({theme}) => theme.COLORS.DARK_700};    

    display: flex;


     height: 100px;

    align-items: center;

    justify-content: space-between;

    padding: 0 28px;


    @media (min-width: 800px) {
        height: 100px;
        padding: 0 64px;
        justify-content: center;
        gap: 64px;
    }

`;


export const Input = styled.div`


display: flex;
flex-direction: row;
align-items: center;
justify-content: center;



width: 100%;
max-width: 581px;
height: 48px;
border-radius: 5px;
gap: 16px;




background: ${({ theme }) => theme.COLORS.DARK_900};

> input {
    border: none;
    background: transparent;
    width: 100%;
    max-width: 251px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: start;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;

outline: none;

&::placeholder {
    color: ${({theme}) => theme.COLORS.LIGHT_500};
}
&::focus {
    outline: none;
}
 

}


`;


export const HeaderWrapper = styled.div`

    grid-area: header;
    width: 100%;
    height: 100%;
`;


export const Content = styled.main`

    grid-area: content;

    background-color: ${({theme}) => theme.COLORS.DARK_400};

    overflow-y: scroll;

    overflow-x: hidden;
    width: 100vw;

    height: 100%;

    display: grid;

&::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
&::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
&::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.COLORS.BLUE_200};
  border: 0px none #ffffff;
  border-radius: 50px;
}
&::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
&::-webkit-scrollbar-thumb:active {
  background: #000000;
}
&::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
&::-webkit-scrollbar-track:hover {
  background: #666666;
}
&::-webkit-scrollbar-track:active {
  background: #333333;
}
&::-webkit-scrollbar-corner {
  background: transparent;
}

`;


export const Footer = styled.footer`



display: flex;
align-items: center;
justify-content: center;
gap: 15px;

> p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height */



    /* Light/Light 200 */


    color: ${({theme}) => theme.COLORS.LIGHT_200};
}

`;