/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { FiSearch, FiHome, FiMessageSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../../assets/img/logo-sd.jpg';

import { Container, Menu, MenuLeft, MenuRight, Nav } from './styles';
import { Input } from '../../Form/Input';
import userSPA from '../../../assets/img/profile-picture-2.jpg';

const Header: FC = () => {
  return (
    <>
      <Container>
        <Menu>
          <MenuLeft>
            <Link to="/feed">
              <img src={logoImg} alt="Grupo SPA | Logo" />
            </Link>
            <Input
              type="text"
              icon={FiSearch}
              name="search"
              placeholder="search"
            />
            <ul>
              <li>
                <Link to="/feed">
                  <FiHome size={14} />
                  Home
                </Link>
              </li>

              <li>
                <Link to="/chatUsers">
                  <FiMessageSquare size={14} />
                  Messagens
                </Link>
              </li>
            </ul>
          </MenuLeft>

          <img src={userSPA} alt="User SPA | Logo" />
          <MenuRight>
            <Nav>
              <h1>Logo</h1>
              <Link to="/me">
                <li>Configurations</li>
              </Link>
              <Link to="/">
                <li>Logout</li>
              </Link>
            </Nav>
          </MenuRight>
        </Menu>
      </Container>
    </>
  );
};

export { Header };
