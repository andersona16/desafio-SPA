import styled from 'styled-components';

export const Container = styled.main`
  @media screen and (max-width: 1445px) {
    width: 100%;
    padding: 40px;
  }
  display: flex;
  flex-direction: column;
  width: 1018px;
  height: 814px;
  max-width: 1028px;
  height: 814px;
  background-color: #182328;
  margin-left: 20px;
  border-radius: 10px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const AsideMessages = styled.aside`
  border-right: 1px solid var(--colors-gray);
  width: 430px;
  height: 814px;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;

    > h1 {
      font-size: 14px;
      color: var(--colors-white);
    }
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      width: 269px;
      height: 31px;
    }
  }
`;

export const UserMessages = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const CommentsUsers = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    gap: 20px;
  }
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 10px;

  > div:nth-child(1) {
    display: flex;
    justify-content: end;
  }
  > div:nth-child(2) {
    display: flex;
  }
`;

export const YourAnswer = styled.div`
  border-top: 1px solid var(--colors-gray);

  height: 100px;

  padding: 10px;

  input {
    border: none;

    &:hover {
      border: none;
    }
  }

  > span {
    font-size: 14px;
    color: var(--colors-white);
  }

  > div:nth-child(2) {
    display: flex;

    justify-content: end;
    align-items: center;
    gap: 5px;
    div {
      display: flex;
      align-items: center;

      width: 96px;
      height: 30px;
      border: 1px solid var(--colors-white);
      border-radius: 5px;

      cursor: pointer;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;

        width: 80px;
        height: 15px;

        font-size: 8px;

        border: none;

        svg {
          margin-right: 9px;
        }
      }
    }
  }
`;

export const CardUsersMessage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
`;

export const CardUsers = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--colors-white);
  border-radius: 10px;
  width: 269px;
  height: 50px;

  & + * {
    margin-top: 10px;
  }

  img {
    width: 36px;
    height: 36px;
    margin: 10px;
  }
  .estranho {
    background-color: blue;
  }
`;

export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
  h1 {
    font-size: 14px;
    color: var(--colors-white);
  }
  span:nth-child(2) {
    color: var(--colors-gray);
    font-size: 10px;
  }
  div {
    display: flex;
    gap: 50px;
    span {
      color: var(--colors-gray);
      font-size: 10px;
    }
  }
`;
