import { FC } from 'react';
import {
  Background,
  Container,
  Content,
  ImageWrapper,
  Form,
  FormRow,
} from './styles';
import { FaGithub, FaGoogle } from 'react-icons/fa';

import spaGroup from '../../../assets/img/logo-socialdev.jpg';
import Button from '../../../components/Form/Button';
import { InputGroup } from '../../../components/Form/InputGroup';
import { Input } from '../../../components/Form/Input';

const Login: FC = () => {
  return (
    <>
      <Container>
        <Background />
        <Content>
          <Form>
            <ImageWrapper>
              <img src={spaGroup} alt="Grupo SPA" />
            </ImageWrapper>

            <InputGroup>
              <label>Email</label>
              <Input type="email" name="" id="" />
            </InputGroup>

            <InputGroup>
              <label>Password</label>
              <Input type="password" name="" id="" />
            </InputGroup>
            <Button children="Create" />

            <FormRow>
              <Button
                children="Use Google account"
                icon={FaGoogle}
                height="30px"
                width="195px"
              />
              <Button
                children="Use GitHub account"
                icon={FaGithub}
                height="30px"
                width="195px"
              />
            </FormRow>

            <Button children="Login" height="30px" width="400px" />

            <Button
              children="Create your account"
              height="60px"
              width="400px"
            />
          </Form>
        </Content>
      </Container>
    </>
  );
};

export { Login };
