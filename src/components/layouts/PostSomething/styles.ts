import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  width: 1018px;
  height: 100px;
  background-color: #182328;
  border-radius: 10px;
  margin-left: 17px;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 20px;
`;

export const FormRow = styled.div`
  display: flex;

  label {
    font-size: 12px;
    color: #fff;
  }
  input {
    width: 660px;
    height: 38px;
  }

  div:nth-child(1) {
    margin-left: 20px;
    margin-right: 20px;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  img {
    width: 50px;
  }
`;

export const FormButton = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;

  li {
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;
  }

  > li:nth-child(3) {
    button {
      width: 98px;
      height: 50px;
    }
  }
`;

export const CustomButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 10px;

  border: 1px solid #fff;
  color: #fff;
  width: 50px;
  height: 50px;

  cursor: pointer;
`;
