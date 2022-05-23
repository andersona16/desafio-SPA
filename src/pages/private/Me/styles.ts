import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  background-color: #2a363c;
  height: 100vh;

  padding: 20px;
`;

export const Content = styled.div`
  background-color: #182328;
  width: 1400px;
  height: 600px;
  margin: 0 auto;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 10px 10px 0 0;
  }
`;

export const UserImage = styled.div`
  position: relative;
  bottom: 77px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  div {
    display: flex;
    justify-content: space-between;
    span,
    a {
      color: var(--colors-white);
      text-decoration: underline;
      font-size: 14px;
    }
  }

  p {
    color: var(--colors-white);
    font-size: 12px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 10px;

  > button {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 195px;
  }
`;
