import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectIsLoggedIn);
  const location = useLocation;

  return !isAuth ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicRoute;
