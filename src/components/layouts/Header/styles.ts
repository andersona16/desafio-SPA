import styled from 'styled-components';
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #182328;
  height: 55px;
  width: 100%;
  padding: 0 40px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 10px;
    li,
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      text-decoration: none;
      list-style: none;
      color: var(--colors-white);
    }
  }
  img {
    width: 30px;
    height: 30px;
    margin: 10px;
  }
  svg {
    margin: 0 auto;
  }
`;

export const MenuRight = styled.div``;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;
  position: relative;
  img {
    height: 30px;
    width: 30px;
  }
  svg {
    fill: var(--colors-white);
    position: absolute;
    right: -10px;
    height: 20px;
    width: 20px;
  }
  span {
    font-size: 12px;
    color: var(--colors-white);
  }
  .optionsUser {
    display: none;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    background: var(--colors-white);
    height: 44px;
    width: 81px;
    border-radius: 10px;
    padding: 10px;
    top: -40px;
    opacity: 0;
    transition: all 0.5s;
    position: absolute;
  }
  .open {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    background: #f4f4f4;
    height: 70px;
    width: 120px;
    border-radius: 10px;
    padding: 10px;
    top: 55px;
    right: 5px;
    opacity: 1;
    transition: all 0.5s;
    position: absolute;
    a {
      color: #000;
      font-size: 14px;
      text-decoration: none;
    }
  }
`;
