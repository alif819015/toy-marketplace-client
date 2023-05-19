import { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Login = () => {
    const {login} = useContext(AuthContext);
const [success, setSuccess] = useState('');
const [error, setError] = useState('');

const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setSuccess('');
    setError('');

login(email, password)
.then(result =>{
    const loggedUser = result.user;
    console.log(loggedUser);
    setSuccess('Login success fully');
    event.target.reset();
})
.catch(error=>{
    setError(error.message);
})

}

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <a className="text-green-500 text-center">
              <p>{success}</p>
            </a>
            <a className="text-red-500 text-center">
              <p>{error}</p>
            </a>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <a href="#" className="label-text-alt link link-hover text-center">
              New to Please {" "}
              <Link to="/register">
                <span className="text-green-600">Register</span>
              </Link>
            </a>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
