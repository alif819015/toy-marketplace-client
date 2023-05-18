import { Link } from "react-router-dom";

const NavTwo = () => {
  return (
    <div className="navbar flex justify-between">
      <div>
        <div className="">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
      </div>
      <div className="text-center">
        <div className="">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Home
          </Link>
        </div>
        <div className="">
          <Link to="/blogs" className="btn btn-ghost normal-case text-xl">
            Blogs
          </Link>
        </div>
        <div className="">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Home
          </Link>
        </div>
        <div className="">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavTwo;
