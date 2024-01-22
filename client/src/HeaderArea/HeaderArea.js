import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar } from "@mui/material";
import "./HeaderArea.css";

function HeaderArea({ userImage }) {
  console.log(userImage);
  return (
    <div className="HomePage">
      <div className="header">
        <div className="first-header">
          <div className="Search">
            <AiOutlineSearch style={{ height: "4rem" }} />
            <input placeholder="Szukaj" type="Search" />
          </div>
        </div>

        <div className="middle-header">
          <a href="#">
            <h1>SocialSphere</h1>
          </a>
        </div>

        <div className="third-header">
          <Avatar src={userImage} />
        </div>
      </div>
    </div>
  );
}

export default HeaderArea;
