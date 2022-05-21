import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;

  top: 0;

  border-bottom: 1px solid #ebedf3;

  background-color: #182328;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1360px;
  width: 100%;
  height: 100%;

  margin: 0 auto;
  padding: 0 25px;

  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-left: 21px;
    li {
      list-style: none;
      a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
      }
    }
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export const MenuLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  max-width: 100%;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 14;

    height: 40px;
    width: 40px;

    margin: 0 20px;

    transition: background-color 0.2s;

    &:hover {
      background-color: #f3f6f9;
    }

    > svg {
      width: 29px;
      height: 29px;

      color: #ccc;

      transition: color 0.2s;
    }
  }

  > a > img {
    height: 50px;
    width: 50px;

    margin-right: 6rem;
    margin-left: 2rem;

    @media (max-width: 420px) {
      margin-right: auto;
      margin-left: 0;
    }
  }

  @media (max-width: 720px) {
    > form {
      display: none;
    }

    > img {
      margin-left: 1rem;
    }

    > button {
      width: 40px;
    }
  }
`;

export const MenuRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  max-width: 100%;

  > div:nth-child(1) {
    background-color: #762772;

    transition: background-color 0.2s;
  }

  > div:nth-last-child(2) > button {
    width: 43px;
    height: 43px;

    padding: 10px;

    border-radius: 0.85rem;

    > svg {
      width: 23px;
      height: 23px;
    }
  }

  > button {
    background-color: #c9f7f5;

    color: #1bc5bd;

    border: 2px solid transparent;

    height: 33px;

    padding: 0 16px;

    transition: background-color 0.2s, color 0.2s;
  }

  > button:nth-child(1) {
    margin-right: 0.5rem;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;

    transition: background-color 0.2s;

    border-radius: 0.85rem;
  }
`;

export const CustomButton = styled.button`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  color: #ccc;

  transition: color 0.2s;

  &:hover {
    color: #762772;

    > svg {
      color: #762772;
    }
  }

  > svg {
    margin-right: 8px;

    color: #ccc;

    transition: color 0.2s;
  }
`;
