import { FC, InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: string;
  height?: string;
  width?: string;
}

const Input: FC<IInputProps> = ({name, type, height, width}) => {
  return (
    <Container>
      <input style={{height, width}} />
    </Container>
  );
};

export { Input };
