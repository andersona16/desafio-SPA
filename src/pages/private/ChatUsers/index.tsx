import { FC } from 'react';
import { Aside } from '../../../components/layouts/Aside';
import { Header } from '../../../components/layouts/Header';
import { MessageUsers } from '../../../components/layouts/MessagesUsers';

import { Container, Content, Main } from './style';

const ChatUsers: FC = () => {
  return (
    <>
      <Header />

      <Main>
        <Container>
          <Content>
            <Aside />
          </Content>
          <MessageUsers />
        </Container>
      </Main>
    </>
  );
};

export { ChatUsers };
