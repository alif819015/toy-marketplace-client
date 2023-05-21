import logo from "../../../public/logo.png";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <div className="w-16">
            <img src={logo} alt="" />
          </div>
          <p className="font-bold">SuperToyEmpire</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Avengers</a>
          <a className="link link-hover">Transformers</a>
          <a className="link link-hover">Sarvel</a>
          <a className="link link-hover">Star wars</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
            <div className="mt-6">
              <span className="footer-title">Social</span>
              <div className="mt-5 flex gap-4">
                <a href="https://twitter.com/">
                  <FaTwitter className="text-blue-600 w-8 h-8"></FaTwitter>
                </a>
                <a href="https://www.facebook.com/">
                  <FaFacebook className="text-blue-600 w-8 h-8"></FaFacebook>
                </a>
                <a href="https://www.youtube.com/">
                  <FaYoutube className="text-red-600 w-8 h-8"></FaYoutube>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer footer-center p-4 text-base-content">
        <p>Copyright © 2023 - All right reserved by SuperToyEmpire</p>
      </div>
    </div>
  );
};

export default Footer;
