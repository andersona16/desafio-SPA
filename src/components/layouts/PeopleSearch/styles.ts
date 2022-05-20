import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardUser = styled.div`
  border: 1px solid #fff;
  width: 313px;
  height: 50px;
  border-radius: 10px;

  h1 {
    font-size: 14px;
    color: #fff;
  }
  span {
    font-size: 10px;
    color: #fff;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0px 12px 0px 6px;

  img {
    border-radius: 10px 10px 0 0;
    width: 36px;
    height: 36px;
  }

  > div:nth-child(3) {
    display: flex;
    justify-content: end;
  }
`;
