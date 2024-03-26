import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import UserList from "./UserProvider";
import User from "./User";
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header handleOpenSidebar={handleOpenSidebar} />{" "}
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          handleOpenSidebar={handleOpenSidebar}
        />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserList" element={<UserList />} />{" "}
          <Route path="/User" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
