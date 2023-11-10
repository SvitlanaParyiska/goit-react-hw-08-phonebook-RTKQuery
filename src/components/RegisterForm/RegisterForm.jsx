import { useDispatch } from 'react-redux';
import { register } from 'redux/authOperations';
import toast from 'react-hot-toast';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    try {
      await dispatch(
        register({
          name: name.value,
          email: email.value,
          password: password.value,
        })
      ).unwrap();
      toast.success('Welcome!', {
        duration: 3000,
        position: 'top-right',
      });
      e.target.reset();
    } catch (e) {
      toast.error('Fill in correct name or valid email!', {
        duration: 3000,
        position: 'top-right',
      });
    }
  };

  return (
    <div className="card p-5 mx-auto mt-5" style={{ width: 500 }}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputName"
            required
          />
        </div>
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
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
            minLength="7"
            required
          />
        </div>
        <button type="submit" className="btn btn-info">
          Registration
        </button>
      </form>
    </div>
    // <form onSubmit={handleSubmit} autoComplete="off">
    //   <label>
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
  );
};

export default RegisterForm;
