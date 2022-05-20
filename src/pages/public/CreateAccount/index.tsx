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

const CreateAccount: FC = () => {
  return (
    <>
      <Container>
        <Background />
        <Content>
          <Form>
            <ImageWrapper>
              <img src={spaGroup} alt="Grupo SPA" />
            </ImageWrapper>

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
            <p>OR</p>

            <FormRow>
              <InputGroup>
                <label>First Name</label>
                <Input width="195px" name="name" type="text" />
              </InputGroup>
              <InputGroup>
                <label>Last Name</label>
                <Input width="195px" type="text" />
              </InputGroup>
            </FormRow>

            <InputGroup>
              <label>Email</label>
              <Input type="email" name="" id="" />
            </InputGroup>

            <InputGroup>
              <label>Username</label>
              <Input type="text" />
            </InputGroup>

            <InputGroup>
              <label>Password</label>
              <Input type="password" name="" id="" />
            </InputGroup>
            <Button children="Create" />

            <p>
              By joining, you agree to the <span>Terms</span> and{' '}
              <span>Privacy Policy.</span>
            </p>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export { CreateAccount };
