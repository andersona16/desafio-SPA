import { FC } from 'react';
import {
  Container,
  Content,
  CustomButton,
  Form,
  FormButton,
  FormRow,
  ImageWrapper,
} from './styles';

import userSPA from '../../../assets/img/profile-picture-2.jpg';
import { Input } from '../../Form/Input';
import { FiHome } from 'react-icons/fi';

const PostSomething: FC = () => {
  return (
    <Container>
      <Content>
        <Form>
          <FormRow>
            <ImageWrapper>
              <img src={userSPA} alt="User 1" />
            </ImageWrapper>
            <div>
              <label>What are you working on?</label>
              <Input name=" " type="text" />
            </div>
          </FormRow>

          <FormButton>
            <li>
              <CustomButton type="button">
                <FiHome size={20} />
                picture
              </CustomButton>
            </li>

            <li>
              <CustomButton type="button">
                <FiHome size={20} />
                video
              </CustomButton>
            </li>
            <li>
              <CustomButton type="button">
                <FiHome size={20} />
                publish
              </CustomButton>
            </li>
          </FormButton>
        </Form>
      </Content>
    </Container>
  );
};

export { PostSomething };
