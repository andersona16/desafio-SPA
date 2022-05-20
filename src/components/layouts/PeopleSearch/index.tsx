import { FC } from 'react';
import { CardUser, Container, ImageWrapper } from './styles';

import WomanUser from '../../../assets/img/post-pisture-user-woman.jpg';

const PeopleSearch: FC = () => {
  return (
    <Container>
      <CardUser>
        <ImageWrapper>
          <img src={WomanUser} alt="User 1" />
          <div>
            <h1>Woman User 1</h1>
            <span>Developer Frontend</span>
          </div>

          <div>
            <span>+ Follow</span>
          </div>
        </ImageWrapper>
      </CardUser>
    </Container>
  );
};

export { PeopleSearch };
