import { FC, useEffect, useState } from 'react';
import {
  Container,
  Content,
  ImageWrapper,
  NameProfession,
  SearchPeople,
  UserContent,
  UserImage,
} from './styles';

import bannerSPA from '../../../assets/img/banner-user.jpg';
import userSPA from '../../../assets/img/profile-picture-2.jpg';
import { Input } from '../../Form/Input';
import { FiSearch } from 'react-icons/fi';
import { PeopleSearch } from '../PeopleSearch';
import api from '../../../services/api';
import { APIUser } from '../../../@types';

const Aside: FC = () => {
  const [user, setUser] = useState<APIUser>();

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users/andersona16');

      console.log(response);
      setUser(response.data);
    }

    loadUsers();
  }, []);

  return (
    <>
      <Container>
        <Content>
          <ImageWrapper>
            <img src={bannerSPA} alt="Grupo SPA" />
          </ImageWrapper>

          <UserImage>
            <img src={userSPA} alt="User " />
          </UserImage>

          <NameProfession>
            <h1>{user?.name}</h1>
            <span>Developer</span>
          </NameProfession>

          <UserContent>
            <div>
              <h1>My projects</h1>
              <span> {user?.public_repos}</span>
            </div>
            <div>
              <h1>My articles</h1>
              <span>18</span>
            </div>
            <div>
              <h1>My connections</h1>
              <span>{user?.following}</span>
            </div>
          </UserContent>

          <div>
            <SearchPeople>
              <Input
                placeholder="Faça sua pesquisa"
                type="text"
                icon={FiSearch}
                name="search"
              />
            </SearchPeople>

            <PeopleSearch />
          </div>
        </Content>
      </Container>
    </>
  );
};

export { Aside };
