import { HTMLAttributes, forwardRef } from 'react';

import { Container } from './styles';

interface IInputGroupProps extends HTMLAttributes<HTMLDivElement> {
  textarea?: boolean;
  checkbox?: boolean;
}

const InputGroup = forwardRef<HTMLDivElement, IInputGroupProps>(
  ({ textarea, children, checkbox, ...rest }, ref) => {
    return (
      <Container
        ref={ref}
        textarea={Number(textarea || 0)}
        checkbox={Number(checkbox || 0)}
        {...rest}
      >
        {children}
      </Container>
    );
  },
);

export { InputGroup };
