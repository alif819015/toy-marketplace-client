import NavOne from "./NavOne";
import NavTwo from "./NavTwo";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-[#b92d5e]">
        <NavOne></NavOne>
      </div>
      <div className="navbar bg-[#e83e8c]">
        <NavTwo></NavTwo>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default NavBar;
