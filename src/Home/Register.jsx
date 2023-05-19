import { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, google} = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    setSuccess("");
    setError("");

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please at least add one Uppercase");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User Has ben created success fully");
        event.target.reset();
        userProfile(result.user, name, photo);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const userProfile = (user, name, photo) =>{
    updateProfile(user,{
        displayName: name,
        photoURL: photo,
    })
    .then(()=>{
        console.log('user name updated')
    })
    .catch(error=>{
        setError(error.message);
    })
}

  const handleGoogle = () => {
    google()
    .then(result =>{
        const googleUser = result.user;
        console.log(googleUser);
    })
    .catch(error=>{
        console.error(error.message);
    })
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
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
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label"></label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="URL"
                className="input input-bordered"
                name="photo"
                required
              />
              <label className="label"></label>
            </div>
            <a className="text-green-500 text-center">
              <p>{success}</p>
            </a>
            <a className="text-red-500 text-center">
              <p>{error}</p>
            </a>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <a href="#" className="label-text-alt link link-hover text-center">
              If you have account{" "}
              <Link to="/login">
                <span className="text-green-600">Login</span>
              </Link>
            </a>

            <div className="divider">OR</div>
            <div className="flex justify-center gap-4">
              <button onClick={handleGoogle} className="btn btn-circle btn-outline font-bold text-purple-600">
                G
              </button>
              <button className="btn btn-circle btn-outline font-bold text-purple-600">
                Git
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
