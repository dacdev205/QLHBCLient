import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const App = () => {
  return (
    <div className="gird grid-rows-1">
      <div className="grid md:grid-cols-12 sm:grid-cols-12 h-screen">
        <div className="col-span-2 sm:col-span-1">
          <Navbar></Navbar>
        </div>
        <div className="col-span-10 sm:col-span-11">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default App;
