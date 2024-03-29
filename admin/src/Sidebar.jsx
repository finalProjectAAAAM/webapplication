import React from "react";
import { Link } from "react-router-dom";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="profile-container">
          <div className="profile-image">
            {/* Add your profile image here */}
            <img
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              alt="Profile"
              className="avatar-image"
            />
          </div>
          <div className="sidebar-brand">ADMIN</div>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <BsFillArchiveFill className="icon" /> Packages
        </li>
        <li className="sidebar-list-item">
          <Link to="/UserList">
            <BsFillGrid3X3GapFill className="icon" /> Users Provider
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/User">
            <BsPeopleFill className="icon" /> Users
          </Link>
        </li>
        <li className="sidebar-list-item">
          <BsListCheck className="icon" /> Inventory
        </li>
        <li className="sidebar-list-item">
          <BsMenuButtonWideFill className="icon" /> Reports
        </li>
        <li className="sidebar-list-item">
          <BsFillGearFill className="icon" /> Setting
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
