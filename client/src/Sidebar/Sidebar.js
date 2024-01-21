import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarRow from "../SidebarRow/SidebarRow";

function Sidebar() {
  const [users, setUsers] = useState([]);

  const getFollowedUsers = async () => {
    await fetch("/api")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getFollowedUsers();
  }, []);

  return (
    <div className="sidebar">
      <h2 className="observes">Obserwowani</h2>
      {users &&
        users.length > 0 &&
        users.map((user, index) => {
          return <SidebarRow key={index} data={user} />;
        })}
    </div>
  );
}

export default Sidebar;
