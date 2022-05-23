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

  svg {
    margin: 0px;
  }
`;

export const MenuRight = styled.nav``;

export const Nav = styled.div``;
