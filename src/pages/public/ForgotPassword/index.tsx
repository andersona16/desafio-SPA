import { FC } from 'react';

import {
  Background,
  Container,
  Content,
  ImageWrapper,
  Form,
  FormRow,
} from './styles';

import spaGroup from '../../../assets/img/logo-socialdev.jpg';
import Button from '../../../components/Form/Button';
import { InputGroup } from '../../../components/Form/InputGroup';
import { Input } from '../../../components/Form/Input';

const ForgotPaassword: FC = () => {
  return (
    <Container>
      <Background />

      <Content>
        <Form>
          <ImageWrapper>
            <img src={spaGroup} alt="Grupo SPA" />
          </ImageWrapper>

          <FormRow>
            <p>
              Enter the email address associated with your account and we’ll
              send you a link to reset your password.
            </p>
          </FormRow>

          <InputGroup>
            <label>Email</label>
            <Input type="email" name="" id="" />
          </InputGroup>

          <Button children="Send password reset instructions" height="30px" width="400px" />
        </Form>
      </Content>
    </Container>
  );
};

export { ForgotPaassword };
