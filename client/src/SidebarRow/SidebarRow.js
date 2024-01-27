import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function SidebarRow({ data }) {
  return (
    <div className="sidebarRow">
      <Link to={`/users/${data._id}`}>
        {data ? <Avatar src={data.userImage} /> : <Avatar />}
        <p className="userName">{data.name}</p>
      </Link>
    </div>
  );
}

export default SidebarRow;
