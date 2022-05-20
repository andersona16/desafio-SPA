import styled from 'styled-components';

interface IInputGroupProps {
  textarea?: number;
  checkbox?: number;
}

export const Container = styled.div<IInputGroupProps>`
  display: flex;
  flex-direction: column;

  flex: 1;

  > div {
    flex: 1;
    max-width: 100%;
  }

  label {
    font-size: 16px;
    color: #fff;

     span {
      color: #B0B0B0;
      font-size: 14px;
    }
  }
`;
