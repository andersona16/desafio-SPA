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
  children?: string;
  title?: string;
}

const Input: FC<IInputProps> = ({
  height,
  width,
  children,
  icon: Icon,
  placeholder,
}) => {
  return (
    <Container>
      <label>{children}</label>
      {Icon && <Icon size={12} />}
      <input style={{ height, width }} />
    </Container>
  );
};

export { Input };
