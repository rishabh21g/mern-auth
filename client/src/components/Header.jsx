import { useState } from "react";
import { Link, Links } from "react-router-dom";
import logo from "../../public/log.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Links */}
          <div className="flex items-center gap-x-4">
            <Link href="/" className="flex items-center">
              <img className="md:h-8 w-auto h-6" src={logo} alt="Logo" />
              <span className="ml-2 md:text-xl  text-sm font-bold">
                MERN-Authentication
              </span>
            </Link>
            <div className="hidden md:flex md:space-x-8 ml-6">
              <ul className=" space-x-5 flex gap-2">
                <Link to="/">
                  <li className="text-gray-300 hover:text-white px-1 pt-1 inline-flex items-center text-sm font-medium">
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li className="text-gray-300 hover:text-white px-1 pt-1 inline-flex items-center text-sm font-medium">
                    About
                  </li>
                </Link>
                <Link to="/sign-in">
                  <li className="text-gray-300 hover:text-white px-1 pt-1 inline-flex items-center text-sm font-medium">
                    Sign-In
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          {/* Profile Dropdown */}
          <div className="ml-3 relative hidden md:block">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Link to="/profile">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                />
              </Link>
            </button>

            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white text-gray-700 ring-1 ring-black ring-opacity-5">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Sign out
                </a>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-4 md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex-col gap-y-6">
          <Link to="/">
            <li className="text-gray-300 hover:text-white px-1 pt-1 inline-flex items-center text-sm font-medium">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-gray-300 hover:text-white px-1 pt-1 inline-flex items-center text-sm font-medium">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-gray-300 hover:text-white px-1 pt-1 inline-flex items-center text-sm font-medium">
              Sign-In
            </li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Header;
