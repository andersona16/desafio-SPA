import { FC } from 'react';
import { Aside } from '../../../components/layouts/Aside';
import { Header } from '../../../components/layouts/Header';
import { PostSomething } from '../../../components/layouts/PostSomething';
import { PostUsers } from '../../../components/layouts/PostsUsers';
import { TweetUser } from '../../../components/layouts/TweetUser';
import { Container, Content } from './styles';

const Feed: FC = () => {
  return (
    <>
      <Header />

      <Container>
        <Aside />
        <Content>
          <PostSomething />
          <TweetUser />
        </Content>
      </Container>
    </>
  );
};

export { Feed };
