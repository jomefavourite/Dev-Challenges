import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .App {
  position: relative;
}


  body {
    font-family: "Montserrat";
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    color: #333333;
  }

  .windbnb-image {
    width: 100%;
    height: 266px;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 400px;

  @media (min-width: 768px) {
    max-width: 900px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
