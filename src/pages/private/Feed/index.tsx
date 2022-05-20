import { FC } from 'react';
import { Aside } from '../../../components/layouts/Aside';
import { Header } from '../../../components/layouts/Header';
import { PostSomething } from '../../../components/layouts/PostSomething';
import { Container, Content } from './styles';

const Feed: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Aside />
        </Content>
        <PostSomething />
      </Container>
    </>
  );
};

export { Feed };
