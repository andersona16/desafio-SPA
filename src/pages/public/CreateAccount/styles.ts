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
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  span {
    color: white;
    text-decoration: underline;
    font-size: 12px;
  }

  p {
    color: white;
    font-size: 12px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 10px;
`;