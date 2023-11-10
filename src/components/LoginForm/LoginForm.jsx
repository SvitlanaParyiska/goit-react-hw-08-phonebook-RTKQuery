import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authOperations';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      toast.success('Welcome!', {
        duration: 3000,
        position: 'top-right',
      });
      form.reset();
    } catch (error) {
      toast.error('Fill in correct email and login!', {
        duration: 3000,
        position: 'top-right',
      });
    }
  };

  return (
    <div className="card p-5 mx-auto mt-5" style={{ width: 500 }}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="submit" className="btn btn-info">
          Log In
        </button>
      </form>
      <Link to="/register">{"Don't have an account? Sign Up"}</Link>
    </div>
  );
};
