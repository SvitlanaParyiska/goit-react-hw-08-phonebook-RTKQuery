import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import React from 'react';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="navbar bg-dark mb-3">
      <div className="container-fluid">
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </nav>
  );
};

export default AppBar;
