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
import { Link } from 'react-router-dom';
import { socialMediaAuth } from '../../../services/auth';
import { githubProvider, googleProvider } from '../../../config/authMethods';

const CreateAccount: FC = () => {
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
              <Link to="/">
                <img src={spaGroup} alt="Grupo SPA" />
              </Link>
            </ImageWrapper>

            <FormRow>
              <Button
                onClick={() => handleOnClick(googleProvider)}
                children="Use Google account"
                icon={FaGoogle}
                height="30px"
                width="195px"
              />
              <Button
                onClick={() => handleOnClick(githubProvider)}
                children="Use GitHub account"
                icon={FaGithub}
                height="30px"
                width="195px"
              />
            </FormRow>

            <span>OR</span>

            <FormRow>
              <InputGroup>
                <label>First Name</label>
                <Input width="195px" name="name" type="text" />
              </InputGroup>
              <InputGroup>
                <label>Last Name</label>
                <Input name="nmae" width="195px" type="text" />
              </InputGroup>
            </FormRow>

            <InputGroup>
              <label>Email</label>
              <Input name="" type="email" id="" />
            </InputGroup>

            <InputGroup>
              <label>
                Username <span>(only letters, numbers, and underscores)</span>{' '}
              </label>
              <Input name="" type="text" />
            </InputGroup>

            <InputGroup>
              <label>
                Password <span>(min. 8 char)</span>
              </label>
              <Input type="password" name="" id="" />
            </InputGroup>
            <Link to="/">Create</Link>

            <p>
              By joining, you agree to the <u>Terms</u> and{' '}
              <u>Privacy Policy.</u>
            </p>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export { CreateAccount };
