import { FC, useEffect, useMemo, useState } from 'react';
import { CardUser, Container, ImageWrapper } from './styles';

import api from '../../../services/api';
import { APIConnection } from '../../../@types';

import WomanUser from '../../../assets/img/post-pisture-user-woman.jpg';
import MenUser from '../../../assets/img/post-pisture-user-men.jpg';

const PeopleSearch: FC = () => {
  const [connection, setConnection] = useState<APIConnection[]>();

  const apiTimeDelay = useMemo(() => 10, []);

  useEffect(() => {
    async function loadConnection() {
      const response = await api.get<APIConnection[]>(
        '/users/andersona16/followers',
      );

      console.log(response.data);
      setConnection(response.data);
    }
    const timer = setTimeout(() => loadConnection(), apiTimeDelay);

    return () => clearInterval(timer);
  }, [apiTimeDelay]);

  return (
    <>
      <Container>
        <CardUser>
          {/* {connection?.map(({ login }) => (
            <span>{login}</span>
          ))} */}
          <ImageWrapper>
            <img src={WomanUser} alt="User 1" />
            <div>
              <h1>Woman User 1</h1>
              <span>Developer Frontend</span>
            </div>
            <div>
              <span>+ Follow</span>
            </div>
          </ImageWrapper>
        </CardUser>
        <CardUser>
          {/* {connection?.map(({ login }) => (
            <span>{login}</span>
          ))} */}
          <ImageWrapper>
            <img src={MenUser} alt="User 1" />
            <div>
              <h1>Man User 2</h1>
              <span>Developer Frontend</span>
            </div>
            <div>
              <span>+ Follow</span>
            </div>
          </ImageWrapper>
        </CardUser>
        <CardUser>
          {/* {connection?.map(({ login }) => (
            <span>{login}</span>
          ))} */}
          <ImageWrapper>
            <img src={WomanUser} alt="User 1" />
            <div>
              <h1>Woman User 2</h1>
              <span>Developer Frontend</span>
            </div>
            <div>
              <span>+ Follow</span>
            </div>
          </ImageWrapper>
        </CardUser>
        <CardUser>
          {/* {connection?.map(({ login }) => (
            <span>{login}</span>
          ))} */}
          <ImageWrapper>
            <img src={MenUser} alt="User 1" />
            <div>
              <h1>Man User 2</h1>
              <span>Developer Frontend</span>
            </div>
            <div>
              <span>+ Follow</span>
            </div>
          </ImageWrapper>
        </CardUser>
      </Container>
    </>
  );
};

export { PeopleSearch };
