import { useContext, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { GiRoyalLove } from "react-icons/gi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getaddcardData, getwishlistData } from "../utilities/Localstorage";
import { AssestContext } from "../../main";
import logo from "../../assets/favicon-16x16.png";

const Navbar = () => {
  const currentlocation = useLocation();

  // context
  const { cartData, setCartData, setWishlist, wishlist } =
    useContext(AssestContext);

  useEffect(() => {
    const getAddcartData = getaddcardData();
    setCartData(getAddcartData);
    const getWishlistData = getwishlistData();
    setWishlist(getWishlistData);
  }, []);

  return (
    <div
      style={{
        background:
          currentlocation.pathname === "/" ? `#9538E2` : "transparent",
        color: currentlocation.pathname === "/" ? `white` : "black",
      }}
      className="m-7 mb-0 rounded-tl-3xl rounded-tr-3xl"
    >
      <div className={`container mx-auto `}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <NavLink to="/">
                  <li>Home</li>
                </NavLink>
                <NavLink to="/statistic">
                  <li>Statistic</li>
                </NavLink>
                <NavLink to="/dashboard">
                  <li>DashBoard</li>
                </NavLink>
                <NavLink to="/help">
                  <li>Help</li>
                </NavLink>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">
              <div className="w-[30px]">
                <img src={logo} alt="" className="w-full object-cover" />
              </div>
              Gadget Heaven
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 lg:flex gap-3">
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/statistic">
                <li>Statistic</li>
              </NavLink>
              <NavLink to="/dashboard">
                <li>DashBoard</li>
              </NavLink>
              <NavLink to="/help">
                <li>Help</li>
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <Link to="/dashboard" className="btn">
              <FaCartPlus />
              {cartData.length}
            </Link>
            <a className="btn ml-4">
              <GiRoyalLove />
              {wishlist.length}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
