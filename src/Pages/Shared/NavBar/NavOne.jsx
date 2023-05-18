import logo from '../../../../public/logo.png';

const NavOne = () => {
  return (
    <div className="navbar flex-col sm:flex-row">
      <div className="w-20">
          <img src={logo} alt="" />
        </div>
    <div className="">
      <a className="btn btn-ghost font-thin text-white text-2xl">SuperToyEmpire</a>
    </div>
    <div className="flex-1 justify-between gap-2">
      <div className="form-control text-black">
        <input type="text" placeholder="Search" className="input input-bordered" />
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default NavOne;
