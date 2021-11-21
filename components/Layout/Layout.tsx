import React from 'react';

import { NavigationBar } from '../NavigationBar';
import { Footer } from '../Footer'

type LayoutProps = {
  children: React.ReactElement,
};

const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <div>
      <NavigationBar />      
      <div className="main">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout;