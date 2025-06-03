import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../img/freshcart-logo.svg';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/User.context';
import { CartContext } from '../../../context/Cart.context';

export default function Navbar() {
  const { token, logOut } = useContext(UserContext);
  const { cartInfo, getCartproducts } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    getCartproducts();
  }, []);

  const navLinkStyle = ({ isActive }) =>
    `relative before:absolute before:w-0 before:h-0.5 hover:before:w-full transition-[width] before:duration-300 before:bg-primcolor-500 before:left-0 before:-bottom-2 ${
      isActive ? 'before:!w-full font-semibold' : ''
    }`;

  return (
    <nav className="bg-slate-100 shadow-sm py-3">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Logo and Menu Button */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-10" />
          </Link>


          
          <button
            className="text-2xl md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row md:items-center md:gap-8 w-full md:w-auto mt-4 md:mt-0`}
        >
          {/* Pages */}
          
            <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
              <li><NavLink className={navLinkStyle} to="/">Home</NavLink></li>
              <li><NavLink className={navLinkStyle} to="/wishlist">Wishlist</NavLink></li>
              <li><NavLink className={navLinkStyle} to="/category">Category</NavLink></li>
              <li><NavLink className={navLinkStyle} to="/brand">Brand</NavLink></li>
              <li><NavLink className={navLinkStyle} to="/allorders">Order</NavLink></li>
            </ul>
         

          {/* Cart */}
          {token && (
            <Link to="/cart" className="relative mt-4 ps-2">
              <div className="relative">
                <i className="fa-solid fa-cart-shopping text-lg mb-4"></i>
                <div className="absolute -top-2 -right-2 bg-primcolor-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartInfo == null ? (
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  ) : (
                    <span>{cartInfo.numOfCartItems}</span>
                  )}
                </div>
              </div>
            </Link>
          )}

          {/* Social Icons */}
          <ul className="flex gap-3 items-center mt-4 md:mt-0">
            <li><NavLink className={navLinkStyle} to="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></NavLink></li>
            <li><NavLink className={navLinkStyle} to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></NavLink></li>
            <li><NavLink className={navLinkStyle} to="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></NavLink></li>
            <li><NavLink className={navLinkStyle} to="https://github.com" target="_blank"><i className="fa-brands fa-github"></i></NavLink></li>
            <li><NavLink className={navLinkStyle} to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></NavLink></li>
          </ul>

          {/* Auth Links */}
          {!token ? (
            // <ul className="flex flex-col md:flex-row gap-4 items-start md:items-center mt-4 md:mt-0">
            //   <li><NavLink className={navLinkStyle} to="/signup">Signup</NavLink></li>
            //   <li><NavLink className={navLinkStyle} to="/login">Login</NavLink></li>
            // </ul>
<button className="px-6 py-2 border border-primcolor-500 text-primcolor-600 font-semibold rounded-lg transition-all duration-300 hover:bg-primcolor-600 hover:text-white shadow-sm">
<Link to={currentPath === "/Login" ? "/Signup" : "/Login"}>
  Sign in / Sign Up
</Link>
</button>

          ) : (
            <li
              className="list-none cursor-pointer mt-4 md:mt-0"
              onClick={logOut}
            >
              <NavLink className={navLinkStyle} to="/Login">
                <i className="fa-solid fa-right-from-bracket text-lg"></i>
              </NavLink>
            </li>
          )}
        </div>
      </div>
    </nav>
  );
}
