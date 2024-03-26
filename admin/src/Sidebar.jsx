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
        <div className="sidebar-brand">ADMIN</div>
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
