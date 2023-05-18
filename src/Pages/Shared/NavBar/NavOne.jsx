import { Link } from 'react-router-dom';
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
      <div className='flex items-center gap-3'>
        <div>
            <Link className='mr-4' to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </div>
        <div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        </div>
      </div>
    </div>
  </div>
  );
};

export default NavOne;
