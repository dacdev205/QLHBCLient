import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* Hamburger Icon for mobile */}
      <div className="md:hidden fixed top-0 right-0 p-4">
        <button onClick={toggleNavbar}>
          <FaBars />
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block w-64 h-full bg-teal-800 text-white fixed top-0 left-0 z-50`}
      >
        <div className="p-4 text-lg font-semibold border-b border-gray-700">
          Học bạ điện tử
        </div>
        <nav className="flex-grow p-4">
          <ul>
            <li className="mb-3">
              <Link
                to="/"
                className="block py-2 px-4 rounded hover:bg-teal-700"
              >
                Hồ sơ học sinh
              </Link>
            </li>

            {/* Add more menu items here */}
          </ul>
        </nav>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden md:block w-64 h-full bg-teal-800 text-white">
        <div className="p-4 text-lg font-semibold border-b border-gray-700">
          Học bạ điện tử
        </div>
        <nav className="flex-grow p-4">
          <ul>
            <li className="mb-3">
              <a href="#" className="block py-2 px-4 rounded hover:bg-teal-700">
                Hồ sơ học sinh
              </a>
            </li>
            {/* Add more menu items here */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
