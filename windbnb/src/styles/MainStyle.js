import styled from 'styled-components';

export const MainContents = styled.main`
  margin: 2rem 0;
`;

export const MainHeading = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 2rem;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-gap: 2.5rem;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
`;

export const Card = styled.div`
  width: 100%;

  & span span {
    border-radius: 20px;
  }

  > * + * {
    margin-top: 10px;
  }
`;

export const CardIntro = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span span {
    border-radius: 5px;
  }
`;

export const CardAppartmentDetails = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #828282;
  font-weight: 500;

  > * + * {
    margin-left: 10px;
  }
`;

export const CardRatings = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  color: #4f4f4f;

  * + * {
    margin-left: 10px;
  }
`;

export const CardSuperHost = styled.div`
  border: 1px solid #4f4f4f;
  border-radius: 20px;
  padding: 0.4rem 0.5rem;
  font-weight: bold;
  color: #4f4f4f;
`;

export const CardImage = styled.img.attrs(props => ({
  src: props.photo,
}))`
  width: 300px;
`;

export const ErrorMessage = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
