import { FC, useEffect, useState } from 'react';
import {
  CardUser,
  Container,
  Content,
  MessagerTweet,
  PostUserInteraction,
  TweetReactions,
  TweetUserInformation,
} from './style';

import WomanUser from '../../../assets/img/post-pisture-user-woman.jpg';
import { FiMessageSquare, FiShare, FiThumbsUp } from 'react-icons/fi';
import Button from '../../Form/Button';

const TweetUser: FC = () => {
  return (
    <Container>
      <Content>
        <CardUser>
          <TweetUserInformation>
            <img src={WomanUser} alt="User 1" />
            <div>
              <h1>Woman User</h1>
              <span>Developer Frontend</span>
              <span>2h</span>
            </div>
            <div>
              <span>+ follow</span>
            </div>
          </TweetUserInformation>

          <MessagerTweet>
            <h1>I started working on a new project.</h1>
          </MessagerTweet>

          <TweetReactions>
            <div>
              <FiThumbsUp size={10} />
              <span>100 liked</span>
            </div>
            <div>
              <FiMessageSquare size={10} />
              <span>20 comments</span>
            </div>
            <div>
              <FiShare size={10} />
              <span>5 shares</span>
            </div>
          </TweetReactions>

          <PostUserInteraction>
            <Button>
              <FiThumbsUp size={15} />
              <span>100 liked</span>
            </Button>
            <Button>
              <FiMessageSquare size={15} />
              <span>20 comments</span>
            </Button>
            <Button>
              <FiShare size={15} />
              <span>5 shares</span>
            </Button>
          </PostUserInteraction>
        </CardUser>
      </Content>
    </Container>
  );
};

export { TweetUser };
