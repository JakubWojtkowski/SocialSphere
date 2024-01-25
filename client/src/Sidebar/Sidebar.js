import React from "react";
import "./Sidebar.css";
import SidebarRow from "../SidebarRow/SidebarRow";

function Sidebar({ followedUsers }) {
  console.log(followedUsers);
  return (
    <div className="sidebar">
      <h2 className="observes">Obserwowani</h2>
      {followedUsers &&
        followedUsers.length > 0 &&
        followedUsers.map((user, index) => {
          return <SidebarRow key={index} data={user} />;
        })}
    </div>
  );
}

export default Sidebar;
