import styled from 'styled-components';

import backgroundlogin from '../../../assets/img/background.jpg';

export const Container = styled.div`
  display: flex;
  overflow: hidden;

  background-image: url(${backgroundlogin});
  background-position: 100% center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Background = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 31, 38, 0.8);
  max-width: 670px;
  width: 100%;

  height: 100vh;

  /* > div {
    display: flex;
    flex-direction: column;
  } */
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  justify-self: flex-end;
  img {
    width: 235px;
    height: 78px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  button {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    color: var(--colors-white);
    font-size: 12px;
  }

  > span {
    font-size: 14px;
    color: #fff;
  }
  > a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 400px;
    height: 30px;

    color: #fff;
    font-size: 16px;
    border: 1px solid #fff;
    border-radius: 5px;
    background: none;
    cursor: pointer;

    align-items: center;
    text-decoration: none;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 10px;
`;
