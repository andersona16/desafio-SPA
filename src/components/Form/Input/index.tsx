import { ComponentType, FC, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ComponentType<IconBaseProps>;
  placeholder?: string;
  name?: string;
  type?: string;
  height?: string;
  width?: string;
}

const Input: FC<IInputProps> = ({
  name,
  type,
  placeholder,
  height,
  width,
  icon: Icon,
}) => {
  return (
    <Container>
      {Icon && <Icon size={12} />}
      <input style={{ height, width }} />
    </Container>
  );
};

export { Input };
