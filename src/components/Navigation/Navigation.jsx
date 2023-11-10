import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className="navbar-brand mb-0 h1 text-info" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="navbar-brand mb-0 h1 text-info" to="/contacts">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};
