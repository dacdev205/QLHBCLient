import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div>
        <div className="drawer sm:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col sm:items-start sm:justify-start bg-white">
            {/* Page content here */}
            <div className="flex items-center justify-between mx-4">
              <label
                htmlFor="my-drawer-2"
                className="btn bg-teal-800 text-white hover:bg-teal-700 btn-primary drawer-button lg:hidden"
              >
                <RxHamburgerMenu />
              </label>
              <button className="btn btn-primary rounded-full items-center gap-2 px-6 bg-green text-white sm:hidden">
                Log out
              </button>
            </div>
            <div className="mt-5 md:mt-2 mx-4">
              <Outlet />
            </div>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full text-white bg-teal-800 ">
              {/* Sidebar content here */}
              <li className="font-bold">
                <Link to="/" className="flex justify-start mb-3 active-link">
                  Hệ thống quản lý học bạ
                </Link>
              </li>
              <hr />
              <li>
                <Link className="" to="/">
                  Hồ sơ học sinh
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
