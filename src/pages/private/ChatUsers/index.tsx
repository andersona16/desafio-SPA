import { FC } from 'react';
import { Aside } from '../../../components/layouts/Aside';
import { MessageUsers } from '../../../components/layouts/MessagesUsers';

import { Container, Content, Main } from './style';

const ChatUsers: FC = () => {
  return (
    <>
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
