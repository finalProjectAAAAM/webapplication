import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Prov.css";
import Sidebar from "./Sidebar";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserOffer, setSelectedUserOffer] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/allproviders");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = async (iduserProvider) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/userProvider/getoffer/${iduserProvider}`
      );
      console.log("Response data:", response.data);
      setSelectedUserOffer(response.data);
    } catch (error) {
      console.error("Error fetching user offer:", error);
    }
  };

  const deleteProvider = async (iduserProvider) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${iduserProvider}`);
      setUsers(users.filter((user) => user.iduserProvider !== iduserProvider));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">USERS PROVIDERS LIST</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => handleUserClick(user.iduserProvider)}
          >
            <strong>{user.name}</strong> - {user.email}
            <button
              className="delete-button"
              onClick={() => deleteProvider(user.iduserProvider)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
      {selectedUserOffer && (
        <div>
          <h3>Selected User Offer:</h3>
          <ul>
            {selectedUserOffer.map((offer, index) => (
              <li key={index}>
                <p>Title: {offer.title}</p>
                <p>Start Day: {offer.startday}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserList;
