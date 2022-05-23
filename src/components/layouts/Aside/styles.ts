import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  width: 362px;
  height: 600px;
  background-color: #182328;

  border-radius: 10px;
  margin-top: 23px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 10px 10px 0 0;
    width: 362px;
    height: 73px;
  }
`;

export const UserImage = styled.div`
  position: relative;
  bottom: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const NameProfession = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #8e8e8e;
  margin-top: -50px;

  h1 {
    font-size: 14px;
    color: #ffffff;
  }

  span {
    font-size: 10px;
    color: #ffffff;
    margin-bottom: 5px;
  }
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 25px 40px;
  margin-bottom: 25px;
  border-bottom: 1px solid #8e8e8e;

  div {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    h1 {
      font-size: 12px;
      color: #ffffff;
      font-weight: 100;
    }

    span {
      font-size: 12px;
      color: #ffffff;
    }
  }
`;

export const SearchPeople = styled.div`
  input {
    width: 312px;
    height: 31px;
  }
`;
