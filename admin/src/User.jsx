import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Prov.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/allUsers");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (iduser) => {
    try {
      await axios.delete(`http://localhost:3001/deleteuser/${iduser}`);
      // Filter out the deleted user from the list
      setUsers(users.filter((user) => user.iduser !== iduser));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">USERS LIST</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.iduser}>
            <strong>{user.name}</strong> - {user.email}
            <button
              className="delete-button"
              onClick={() => deleteUser(user.iduser)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
