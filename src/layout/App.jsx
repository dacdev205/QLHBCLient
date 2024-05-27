import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const App = () => {
  return (
    <div className="flex h-screen">
      <Navbar></Navbar>
    </div>
  );
};

export default App;
