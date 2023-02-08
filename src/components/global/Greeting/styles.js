import styled from "styled-components";


export const Container = styled.div`

max-width: 1100px;
width: 100%;

height: 120px;

max-height: 260px;
padding: 0 20px;

@media (min-width: 800px) {
    height: 260px;
}
/* Gradients/200 */



`;
export const Content = styled.div`
border-radius: 2.91696px;
width: 100%;
height: 100%;
position: relative;

background: ${({ theme }) => theme.COLORS.GRADIENT_200};


&::before{
    position: absolute;
    content: '';
    left: -15px;
    height: 100%;
    width: 100%;
        background-image: url("/header-img.png");
        background-repeat: no-repeat;
        background-position: start;
        background-size: contain;

        z-index: 0;

}

display: flex;
justify-content: flex-end;

`;

export const TextWrapper = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
flex-wrap: wrap;
width: auto;
max-width: 50%;
margin-right: 4px;
z-index: 1;

@media (min-width: 800px) {
    align-items: flex-start;

    max-width: 70%;
    margin-right:  10%;


}
> h1 {
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 140%;
/* or 25px */


/* Light/Light 300 */

color: ${({ theme }) => theme.COLORS.LIGHT_300};
@media (min-width: 800px) {
    font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
}
}

> p {
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 140%;
/* or 17px */


/* Light/Light 300 */

color: ${({ theme }) => theme.COLORS.LIGHT_300};

@media (min-width: 800px) {
    font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
}
}
`;

export const Image = styled.img`

`;