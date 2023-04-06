import React, { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Contexts/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(swal("User Logged Out"))
      .catch((error) => swal(error.message));
  };

  const menuItems = (
    <>
      <li className="hover:underline">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:underline">
        <Link to="/blogs">Blogs</Link>
      </li>
      <li className="hover:underline ">
        <Link to="/about">About</Link>
      </li>
      {user?.uid ? (
        <>
          <li className="hover:underline ">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:underline ">
            <button onClick={handleLogout}>Sign out</button>
          </li>
        </>
      ) : (
        <li className="hover:underline ">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    
   <div>
     <div className="navbar purple textColor flex justify-between">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
        </label>
        <ul
          tabIndex={1}
          className="menu menu-compact dropdown-content purple mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {menuItems}
        </ul>
      </div>
      <Link to="/" className="btn btn-ghost normal-case text-xl">
      Shopaholic Haven
      </Link>
    </div>
    <div className="navbar-center hidden mr-auto pr-96 lg:flex">
      <ul className="menu menu-horizontal  p-0 pr-1 md:pr-2 lg:pr-28 ">{menuItems}</ul>
    </div>
    
    <label
      htmlFor="dashboard"
      tabIndex={2}
      className="btn btn-ghost "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </label>
  </div>
  
   </div>
  );
};

export default Navbar;
