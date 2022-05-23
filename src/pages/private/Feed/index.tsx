import { FC } from 'react';
import { Aside } from '../../../components/layouts/Aside';
import { PostSomething } from '../../../components/layouts/PostSomething';
import { TweetUser } from '../../../components/layouts/TweetUser';
import { Container, Content, Main } from './styles';

const Feed: FC = () => {
  return (
    <>
      <Main>
        <Container>
          <Aside />
          <Content>
            <PostSomething />
            <TweetUser />
          </Content>
        </Container>
      </Main>
    </>
  );
};

export { Feed };
