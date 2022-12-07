import React, { PropsWithChildren } from 'react';
import Header from '../Header';
import styled from 'styled-components';

function Layout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer>
        <p>© 2022 FunkyLIamas</p>
      </Footer>
    </>
  );
}
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 40px;
`;
const Footer = styled.footer`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 0 28px 40px;
  background: #fae8c7;
  p {
    font-size: 20px;
    font-weight: 700;
    color: #6c5f4c;
  }
`;
export default Layout;
