import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function layout() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="bg-gray-200 h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default layout;
