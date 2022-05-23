import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 1018px;
  height: 814px;
  background-color: #182328;
  border-radius: 10px;
  margin-left: 17px;
  margin-top: 20px;
`;

export const CardUser = styled.div`
  width: 959px;
  border-radius: 10px;
  background-color: #182328;
  margin: 0 auto;
  border: 1px solid var(--colors-gray);
  margin-top: 10px;
`;

export const TweetUserInformation = styled.div`
  display: flex;
  align-items: flex-start;

  padding: 5px 5px;
  gap: 10px;

  img {
    border-radius: 10px 10px 0 0;

    width: 50px;
    height: 50px;
  }
  > div {
    display: flex;
    flex-direction: column;

    > span {
      font-size: 10px;
      color: var(--colors-gray);
    }
  }

  h1 {
    font-size: 14px;
    color: var(--colors-white);
  }
`;

export const MessagerTweet = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 5px;
  margin-top: 25px;
  h1 {
    font-size: 14px;
    color: var(--colors-white);
  }
  img {
    width: 381px;
    height: 321px;
  }
`;

export const TweetReactions = styled.div`
  display: flex;

  border-bottom: 1px solid var(--colors-gray);
  margin-top: 15px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
    span {
      font-size: 6px;
      color: var(--colors-white);
    }
  }
`;

export const PostUserInteraction = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;

  button {
    display: flex;
    align-items: center;
    font-size: 8px;

    width: 90px;
    height: 15px;

    font-size: 8px;

    border: none;
    svg {
      margin-right: 9px;
    }
  }
`;
