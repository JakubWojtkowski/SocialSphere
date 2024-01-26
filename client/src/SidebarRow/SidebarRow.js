import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@mui/material";

function SidebarRow({ data }) {
  return (
    <div className="sidebarRow">
      {data ? <Avatar src={data.userImage} /> : <Avatar />}
      <p className="userName">{data.name}</p>
    </div>
  );
}

export default SidebarRow;
