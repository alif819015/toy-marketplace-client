import NavOne from "./NavOne";
import NavTwo from "./NavTwo";

const NavBar = () => {
  return (
    <div className="text-white">
      <div className="navbar md:px-8 bg-[#b92d5e]">
        <NavOne></NavOne>
      </div>
      <div className="navbar md:px-8 bg-[#c22f63]">
        <NavTwo></NavTwo>
      </div>
      <div className="navbar md:px-8 bg-[#b92d5e]">

      </div>
    </div>
  );
};

export default NavBar;
