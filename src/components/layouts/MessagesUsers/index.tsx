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
import userSPA from '../../../assets/img/profile-picture-2.jpg';
import MenUser from '../../../assets/img/post-pisture-user-men.jpg';

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
                children=""
                name="teste"
                placeholder="test"
                type="text"
                icon={FiSearch}
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
              <CardUsers className="estranho">
                <img src={MenUser} alt="User 1" />
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
                  <img src={userSPA} alt="User 1" />
                  <InfoUser>
                    <div>
                      <h1>Woman User 1</h1>
                      <span>May 16</span>
                    </div>

                    <span>How is the progress of the project? </span>
                  </InfoUser>
                </CardUsers>
              </div>

              <div>
                <CardUsers>
                  <img src={MenUser} alt="User 1" />
                  <InfoUser>
                    <div>
                      <h1>Woman User 1</h1>
                      <span>May 16</span>
                    </div>

                    <span>i'm finishing now. </span>
                  </InfoUser>
                </CardUsers>
              </div>
            </CommentsUsers>

            <YourAnswer>
              <Input name="" />

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
