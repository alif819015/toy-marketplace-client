import { Link } from "react-router-dom";
import logo from "../../../../public/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";

const NavOne = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar flex-col sm:flex-row">
      <div className="w-20">
        <img src={logo} alt="" />
      </div>
      <div>
        <a className="btn btn-ghost font-thin text-white text-2xl">
          SuperToyEmpire
        </a>
      </div>
      <div className="flex-1 justify-between gap-2">
        <div className="form-control text-black">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="flex items-center gap-3">
          <div>
            {user ? (
              <Link
                to="/"
                className="mr-3 hover: hover:text-violet-500 focus:ring-violet-300"
              >
                <button onClick={handleLogOut}>Logout</button>
              </Link>
            ) : (
              <>
                <Link
                  className="mr-4 hover:text-violet-500 focus:ring-violet-300"
                  to="/login"
                >
                  <button>Login</button>
                </Link>
              </>
            )}
          </div>
          <div>
            {user && (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img title={user?.displayName} src={user?.photoURL} />
                </div>
              </label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavOne;
