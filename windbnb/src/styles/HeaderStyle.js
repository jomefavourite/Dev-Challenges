import styled from 'styled-components';

export const MainHeader = styled.header`
  padding: 2rem 0;
`;

export const MainHeaderContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Form = styled.form`
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  margin-top: 2rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Input = styled.input`
  /* border: none; */
  border: 1px solid #f2f2f2;
  padding: 1rem;
  width: 100%;
`;

export const SearchIcon = styled.div`
  padding: 1rem;
  cursor: pointer;
`;
