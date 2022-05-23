import styled from 'styled-components';

export const Container = styled.div`
  input {
    flex: 1;

    height: 36px;
    width: 400px;
    background: transparent;
    color: #fff;
    border: none;
    border-bottom: 1px solid #f4f4f4;

    transition: border-bottom 0.1s;

    &:hover {
      border-bottom: 1px solid #fe6843;
    }
  }
`;
