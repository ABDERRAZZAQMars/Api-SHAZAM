import React from "react";
import {SiShazam, FiSearch } from "../../assets/icons";

function Navbar() {
  return (
    <div className="navbar bg-base-400 px-20 bg-white">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-2xl font-bold  text-blue-700">
          <SiShazam size={24} />
          SHAZAM
        </a>
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <a>MA BIBLIOTHÈQUE</a>
          </li>
          <li>
            <a>L'APPLI</a>
          </li>
          <li>
            <a>LES TOPS</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-ghost bg-gray-100 input-sm "
            />
            <button className="btn btn-ghost bg-gray-100 btn-sm">
              <FiSearch size={24} className="text-blue-700" />
            </button>
          </div>
        </div>
        <button className="btn btn-sm bg-blue-700 border-none">
          TÉLÉCHARGEZ L'APPLICATION
        </button>
      </div>
    </div>
  );
}

export default Navbar;
