import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from "../../Authcontext/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout, userData } = useAuth();

  const navigate = useNavigate();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const logoutHandle = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl sm:text-3xl text-blue-950 font-bold">
              Laundry<span className="text-orange-700">Services</span>
            </h1>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Account / Auth Buttons */}
          <div className="hidden lg:flex items-center lg:order-2 relative">
            {userData ? (
              <div className="relative group">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-gray-800 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 focus:outline-none"
                >
                  Hello, {userData.name.split(" ")[0]}
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute top-full right-0 z-10 mt-1 w-44 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Orders
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={logoutHandle}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-800 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-gray-800 border border-orange-500 hover:bg-orange-100 focus:ring-4 focus:ring-orange-200 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Menu Links */}
          <div
            className={`${isOpen ? 'flex' : 'hidden'} flex-col w-full lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Auth Buttons */}
            {!userData && (
              <div className="flex flex-col mt-4 space-y-2 lg:hidden">
                <Link
                  to="/login"
                  className="text-gray-800 bg-gray-100 hover:bg-gray-200 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-gray-800 bg-orange-100 hover:bg-orange-200 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
