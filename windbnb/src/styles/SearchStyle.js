import styled from 'styled-components';

export const MobileSearchView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SearchBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: rgba(79, 79, 79, 0.3);
  display: block;
  z-index: 1;
`;

export const SearchContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 650px;
  background: #fff;
  padding: 1.5rem 0;
  z-index: 100;

  @media (min-width: 768px) {
    height: 450px;
  }
`;

export const FormContainer = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  margin: 2rem 0;

  /* line at mobile */
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-bottom: 1px solid #f2f2f2;
  }

  input {
    display: block;
    width: 100%;
    border: none;
    padding: 0.5rem 0 0;
    outline: none;
    border-bottom: 2px solid transparent;
    color: #333333;
    font-size: 16px;

    /* &:focus {
      border-bottom: 2px solid #f2f2f2;
    } */
  }

  button {
    position: static;
    display: none;
    margin: 0;
  }

  /* 1200px */
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 0.5rem 2rem; */
    gap: 20px;
    flex: 1 1 0;

    button {
      display: flex;
      width: 100%;
      /* max-width: 300px; */
      margin-right: 20px;
    }

    &::before {
      display: none;
    }
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 800;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 1rem 1.5rem 0.5rem;

  ${props =>
    props.whatClicked === 'location'
      ? ` &:nth-child(1) {
        border: 1px solid #333333;
      }
      `
      : `
      &:nth-child(2) {
        border: 1px solid #333333;
      }
  `}

  & + & {
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    width: 100%;

    padding: 0.5rem 2rem;
    & + & {
      margin-top: 0;
    }
  }
`;

export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(235, 87, 87, 0.9);
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  color: #fff;
  border: none;
  width: 140px;
  margin: 0 auto;
  cursor: pointer;
  padding-right: 1rem;

  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SearchGuestBtn = styled.button`
  background: none;
  border: 1px solid #828282;
  border-radius: 4px;
  padding: 0.05rem;

  > svg {
    display: block;
    width: 100%;
    height: 100%;
    padding: 3px;

    path {
      fill: #828282;
    }
  }
`;

export const SearchLocationContainer = styled.div`
  > div + div {
    margin-top: 1rem;
  }

  > div {
    p {
      padding: 0.5rem 0;
    }

    &:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.1);
    }
  }

  @media (min-width: 768px) {
    > div {
      width: 30%;
      max-width: 400px;
    }
  }
`;

export const SearchGuestContainer = styled.div`
  > div > div + div {
    margin-top: 2rem;
  }

  > div > div > p {
    color: #828282;
  }

  > div > div > div {
    display: flex;
    align-items: center;
    max-width: 100px;
    /* background: #000; */
    justify-content: space-between;
    margin-top: 1rem;

    p {
      color: #333333;
      font-weight: bold;
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
