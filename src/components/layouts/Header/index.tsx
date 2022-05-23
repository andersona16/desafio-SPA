import userSPA from '../../../assets/img/profile-picture-2.jpg';
import { Container, Menu, UserInfo } from './styles';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowDown, FiHome, FiMessageSquare } from 'react-icons/fi';
import logoSD from '../../../assets/img/logo-sd.jpg';
import { Input } from '../../Form/Input';

const Header: FC = () => {
  const [openOptions, setOpenOptions] = useState(false);
  return (
    <Container>
      <Menu>
        <Link to="/feed">
          <img src={logoSD} alt="" />
        </Link>
        <Input />
        <ul>
          <li>
            <Link to={'/feed'}>
              <FiHome />
              Home
            </Link>
          </li>
          <li>
            <Link to={'/chat-users'}>
              <FiMessageSquare />
              Messages
            </Link>
          </li>
        </ul>
      </Menu>
      <UserInfo onClick={() => setOpenOptions(!openOptions)}>
        <img src={userSPA} alt="User SPA | Logo" />
        <FiArrowDown />
        <span>Me</span>
        <div
          onClick={() => setOpenOptions(false)}
          className={openOptions ? 'open' : 'optionsUser'}
        >
          <Link to={'/me'}>Configurations</Link>
          <Link to={'/'}>Logout</Link>
        </div>
      </UserInfo>
    </Container>
  );
};

export { Header };
