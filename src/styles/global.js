import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        font-size: 62.5%;
    }
body{
    background: ${(props) => props.theme.COLORS.BACKGROUND_900};
}
    body * {
       
        color: ${(props) => props.theme.COLORS.DARK_400};
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
    }
    a {
    text-decoration:none;
    }
    button,a {
        cursor: pointer;
        transition: filter 0.2s;
    } 
    button:hover ,a:hover {
    filter: brightness(0.9);
    } 
    `;