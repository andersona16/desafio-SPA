import { FC } from 'react';
import { FiHome, FiSearch, FiVideo } from 'react-icons/fi';
import Button from '../../Form/Button';
import { Input } from '../../Form/Input';

import {
  AsideMessages,
  CardUsers,
  Container,
  Content,
  UserMessages,
  YourAnswer,
  InfoUser,
  CardUsersMessage,
  CommentsUsers,
} from './styles';

import WomanUser from '../../../assets/img/post-pisture-user-woman.jpg';

const MessageUsers: FC = () => {
  return (
    <>
      <Container>
        <Content>
          <AsideMessages>
            <div>
              <h1>Messages</h1>
              <FiHome size={20} />
            </div>

            <div>
              <Input
                type="text"
                icon={FiSearch}
                name="search"
                placeholder="search"
              />
            </div>

            <CardUsersMessage>
              <CardUsers>
                <img src={WomanUser} alt="User 1" />
                <InfoUser>
                  <div>
                    <h1>Woman User 1</h1>
                    <span>May 16</span>
                  </div>

                  <span>Me: hi, how is the new project going? </span>
                </InfoUser>
              </CardUsers>
              <CardUsers>
                <img src={WomanUser} alt="User 1" />
                <InfoUser>
                  <div>
                    <h1>Man User 1</h1>
                    <span>May 15</span>
                  </div>
                  <span>Man user 1: i'm finishing now.</span>
                </InfoUser>
              </CardUsers>
            </CardUsersMessage>
          </AsideMessages>

          <UserMessages>
            <CommentsUsers>
              <div>
                <CardUsers>
                  <img src={WomanUser} alt="User 1" />
                  <InfoUser>
                    <div>
                      <h1>Woman User 1</h1>
                      <span>May 16</span>
                    </div>

                    <span>Me: hi, how is the new project going? </span>
                  </InfoUser>
                </CardUsers>
              </div>

              <div>
                <CardUsers>
                  <img src={WomanUser} alt="User 1" />
                  <InfoUser>
                    <div>
                      <h1>Woman User 1</h1>
                      <span>May 16</span>
                    </div>

                    <span>Me: hi, how is the new project going? </span>
                  </InfoUser>
                </CardUsers>
              </div>
            </CommentsUsers>

            <YourAnswer>
              <Input />

              <div>
                <div>
                  <FiHome size={20} />
                  <Button>picture</Button>
                </div>
                <div>
                  <FiVideo size={20} />
                  <Button>video</Button>
                </div>
                <div>
                  <Button>send</Button>
                </div>
              </div>
            </YourAnswer>
          </UserMessages>
        </Content>
      </Container>
    </>
  );
};
export { MessageUsers };
