import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authOperations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <nav className="navbar">
      <h5 className="text-white mb-0">Welcome, {user.name}</h5>
      <button
        className="btn btn-outline-info ms-5"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </nav>
  );
};
