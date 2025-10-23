import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto py-3 flex justify-between items-center">
        <div className="flex gap-4">
          <div className="logo">
            <img src={logo} alt="" className="w-8 h-8 object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-[#198ae0]">AbracaEye</h1>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#198ae0] text-white px-4 py-2 rounded-full hover:bg-transparent hover:text-[#198ae0] hover:border-[#198ae0] border transition-colors duration-300 ease-in-out"
        >
          Refresh
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
