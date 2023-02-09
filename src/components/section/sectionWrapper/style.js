import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10px;
  max-width: 100vw;

  > h1 {
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 140%;
/* or 25px */

margin-bottom: 10px;
/* Light/Light 300 */

color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
 
 @media (min-width: 800px) {
    margin-left: 0;
    position: relative;
 }
`;

export const SectiondWrapper = styled.div`


overflow-x: scroll;
max-width: 1110px;
@media (min-width: 800px) {
    overflow-x: scroll;


    &::-webkit-scrollbar {
        display: none;
    }

 }

`;

export const CardSection = styled.div`
    display: flex;


  width: max-content;
    overflow-x: hidden;
    gap: 2rem;

 padding-right: 10px;

  @media (min-width: 800px) {
    padding-right: 300px;
  }
`;


export const LeftButton = styled.div`
left: -1px;
position: absolute;
width: 224px;
height: 292px;
top: 20px;

/* Gradients/100 */
background: ${({ theme }) => theme.COLORS.GRADIENT_100};

transform: matrix(-1, 0, 0, 1, 0, 0);
transition: 0.5s;
&:hover {
    cursor: pointer;
    opacity: 0.8;
}
`;


export const RigthButton = styled.div`

position: absolute;
width: 224px;
height: 292px;
right: -1px;
top: 20px;

/* Gradients/100 */

background: ${({ theme }) => theme.COLORS.GRADIENT_100};
transition: 0.5s;
&:hover {
    cursor: pointer;
    opacity: 0.8;
}
`;

export const IconWrapper = styled.div`
width: 24px;
height: 36px;
position: absolute;
right: 0;
top: 50%;
`;
