import styled from 'styled-components';

interface IInputGroupProps {
  textarea?: number;
  checkbox?: number;
}

export const Container = styled.div<IInputGroupProps>`
  display: flex;
  flex-direction: column;

  flex: 1;
  height: 70px;

  > div {
    flex: 1;
    max-width: 100%;
  }

  > label {
    font-size: 16px;
    color: #fff;

    > span {
      color: #c53030;
      font-size: 14px;
      margin-left: 4px;
    }
  }
`;
