import { FC } from 'react';
import { Aside } from '../../../components/layouts/Aside';
import { Header } from '../../../components/layouts/Header';
import { MessageUsers } from '../../../components/layouts/MessagesUsers';

import { Container, Content, PublisAndFeed } from './style';

const ChatUsers: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Aside />
        </Content>
        <PublisAndFeed>
          <MessageUsers />
        </PublisAndFeed>
      </Container>
    </>
  );
};

export { ChatUsers };
