import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useLocation, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return isAuth ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
