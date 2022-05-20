import { FC } from 'react';
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

const Aside: FC = () => {
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
            <h1>User Testing</h1>
            <span>Developer</span>
          </NameProfession>

          <UserContent>
            <div>
              <h1>My projects</h1>
              <span>15</span>
            </div>
            <div>
              <h1>My articles</h1>
              <span>18</span>
            </div>
            <div>
              <h1>My connections</h1>
              <span>200</span>
            </div>
          </UserContent>

          <SearchPeople>
            <Input
              type="text"
              icon={FiSearch}
              name="search"
              placeholder="search"
            />
          </SearchPeople>

          <PeopleSearch />

        </Content>
      </Container>
    </>
  );
};

export { Aside };
