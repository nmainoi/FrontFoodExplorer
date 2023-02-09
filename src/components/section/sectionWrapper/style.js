import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10%;
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
`;

