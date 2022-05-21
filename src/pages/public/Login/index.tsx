import { FC } from 'react';
import {
  Background,
  Container,
  Content,
  ImageWrapper,
  Form,
  FormRow,
  LineButton,
} from './styles';
import { FaGithub, FaGoogle } from 'react-icons/fa';

import spaGroup from '../../../assets/img/logo-socialdev.jpg';
import Button from '../../../components/Form/Button';
import { InputGroup } from '../../../components/Form/InputGroup';
import { Input } from '../../../components/Form/Input';
import { Link } from 'react-router-dom';
import { githubProvider, googleProvider } from '../../../config/authMethods';
import { socialMediaAuth } from '../../../services/auth';

const Login: FC = () => {
  const handleOnClick = async (provider: any) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };

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
              <div>
                <label>Password</label>
                <Link to="/forgot-password">Forgot your password?</Link>
              </div>

              <Input type="password" name="" id="" />
            </InputGroup>

            <FormRow>
              <Button
                onClick={() => handleOnClick(googleProvider)}
                children="Login with Google"
                icon={FaGoogle}
                height="30px"
                width="195px"
              />
              <Button
                onClick={() => handleOnClick(githubProvider)}
                children="Login with Github"
                icon={FaGithub}
                height="30px"
                width="195px"
              />
            </FormRow>

            <LineButton>
              <Link to="/feed">Login</Link>
              <Link to="/create-account">Create your account</Link>
            </LineButton>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export { Login };
