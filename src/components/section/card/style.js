import styled from "styled-components";

export const Container = styled.div`
padding: 24px;
gap: 12px;
isolation: isolate;

width: 210px;
height: 292px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
/* Dark/Dark 200

#00070A
*/
background: ${({ theme }) => theme.COLORS.DARK_300};
/* Dark/Dark 300

#000204
*/

border-radius: 8px;
position: relative;

> h1 {
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 171% */

text-align: center;

/* Light/Light 300 */

color: ${({ theme }) => theme.COLORS.LIGHT_300};

}
`;


export const LikeButton = styled.button`

position: absolute;

right: 16px;

border: none;
background: transparent;
width: 24px;
height: 24px;
`;


export const FoodIcon = styled.div`
width: 88px;
height: 88px;
border-radius: 50%;

background-color: ${({ theme }) => theme.COLORS.RED_200};
`;

export const AddArea = styled.div`
width: 100%;
height: auto;
display: flex;

align-items: center;
justify-content: center;
gap: 8px;

> p {
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 100%;
/* identical to box height, or 16px */


/* Light/Light 300 */

color: #E1E1E6;
}
`;


export const ButtonAdd = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 24px;
gap: 8px;
color : ${({ theme }) => theme.COLORS.LIGHT_100};
width: 162px;
height: 32px;
border: none;
/* Tints/Tomato 100

#750310
*/
background: ${({ theme }) => theme.COLORS.RED_100};
border-radius: 5px;

`;