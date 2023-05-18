import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars , FaXbox} from "react-icons/fa";

const NavTwo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
        <div className="navbar flex justify-between flex-col sm:flex-row">
      <div>
        <div className="">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
      </div>
      <div className={`text-center ${isMenuOpen ? "flex flex-col" : "hidden sm:flex"}`}>
        <div className="">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Home
          </Link>
        </div>
        <div className="">
          <Link to="/allToys" className="btn btn-ghost normal-case text-xl">
            All Toys
          </Link>
        </div>
        <div className="">
          <Link to="/myToys" className="btn btn-ghost normal-case text-xl">
            My Toys
          </Link>
        </div>
        <div className="">
          <Link to="/addToys" className="btn btn-ghost normal-case text-xl">
            Add A Toy
          </Link>
        </div>
        <div className="">
          <Link to="/blogs" className="btn btn-ghost normal-case text-xl">
            Blogs
          </Link>
        </div>
      </div>
      <div className="sm:hidden">
        <button className="btn btn-ghost normal-case text-xl" onClick={handleMenuToggle}>
          {isMenuOpen ? <FaXbox></FaXbox> : <FaBars></FaBars>}
        </button>
      </div>
    </div>
  );
};

export default NavTwo;
