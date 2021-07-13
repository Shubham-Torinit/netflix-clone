import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import {LayoutStyle} from '../../App.style';
import Body from '../components/body';

function Layout() {
  return (
    <LayoutStyle>
      <Header />
      <Body />
      <Footer />
    </LayoutStyle>
  );
}

export default Layout;
