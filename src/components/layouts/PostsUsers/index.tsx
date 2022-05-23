import { FC } from 'react';
import { TweetUser } from '../TweetUser';
import { Container } from './styles';

const PostUsers: FC = () => {
  return (
    <Container>
      <TweetUser />
    </Container>
  );
};

export { PostUsers };
