import { FC, useEffect, useState } from 'react';
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
import { APIMe } from '../../../@types';
import api from '../../../services/api';

const Me: FC = () => {
  const [profile, setProfile] = useState<APIMe>();

  useEffect(() => {
    async function loadingProfile() {
      const response = await api.get<APIMe>('/users/andersona16');

      console.log(response);
      setProfile(response.data);
    }

    loadingProfile();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <ImageWrapper>
            <img src={bannerSPA} alt="Grupo SPA" />
          </ImageWrapper>

          <UserImage>
            <img src={userSPA} alt="User" />
          </UserImage>

          <Form>
            <FormRow>
              <InputGroup>
                <label>First Name</label>
                <Input name="eae" type="" placeholder="eae"></Input>
              </InputGroup>
              <InputGroup>
                <label>Last Name</label>
                <Input type="" name="" id="" />
              </InputGroup>
            </FormRow>
            <FormRow>
              <InputGroup>
                <label>Company</label>
                <Input name="eae" type="" />
              </InputGroup>
              <InputGroup>
                <label>Position</label>
                <Input name="eae" type="" />
              </InputGroup>
            </FormRow>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export { Me };
