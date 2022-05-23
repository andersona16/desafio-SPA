import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   background-color: #2a363c;
//   height: 979px;
//   padding: 32px 23px;
// `;

// export const Content = styled.div`
//   background-color: #182328;
//   height: 600px;
//   border-radius: 10px;
// `;

// export const PublisAndFeed = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

export const Main = styled.main`
  @media screen and (max-width: 768px) {
    background-color: red;
    height: 100%;
  }
  display: flex;
  padding: 40px 20px;
  background-color: #2a363c;
  height: 100vh;
`;

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  display: flex;
  margin: 0 auto;
`;

export const Content = styled.div``;
