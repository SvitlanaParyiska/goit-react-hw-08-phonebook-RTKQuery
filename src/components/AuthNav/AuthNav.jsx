import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <nav className="navbar">
      <NavLink className="navbar-brand mb-0 h1 text-info" to="/register">
        Register
      </NavLink>
      <NavLink className="navbar-brand mb-0 h1 text-info" to="/login">
        Log In
      </NavLink>
    </nav>
  );
};
