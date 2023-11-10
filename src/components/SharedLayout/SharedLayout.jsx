import AppBar from 'components/AppBar/AppBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = props => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
