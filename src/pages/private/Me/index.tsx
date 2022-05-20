import { FC } from 'react';
import { Header } from '../../../components/layouts/Header';
import {
  Container,
  Content,
  Form,
  FormRow,
  ImageWrapper,
  UserImage,
} from './styles';

import bannerSPA from '../../../assets/img/banner-user.jpg';
import userSPA from '../../../assets/img/profile-picture-2.jpg';
import { InputGroup } from '../../../components/Form/InputGroup';
import { Input } from '../../../components/Form/Input';

const Me: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <ImageWrapper>
            <img src={bannerSPA} alt="Grupo SPA" />
          </ImageWrapper>

          <UserImage>
            <img src={userSPA} alt="User " />
          </UserImage>

          <Form>
            <FormRow>
              <InputGroup>
                <label>First Name</label>
                <Input type="email" name="" id="" />
              </InputGroup>
              <InputGroup>
                <label>Last Name</label>
                <Input type="email" name="" id="" />
              </InputGroup>
            </FormRow>
            <FormRow>
              <InputGroup>
                <label>Company</label>
                <Input type="email" name="" id="" />
              </InputGroup>
              <InputGroup>
                <label>Position</label>
                <Input type="email" name="" id="" />
              </InputGroup>
            </FormRow>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export { Me };
