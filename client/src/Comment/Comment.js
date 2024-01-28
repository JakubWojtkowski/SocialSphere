import React from "react";
import { Avatar } from "@mui/material";
import "./Comment.css";
import { useSelector } from "react-redux";
import { selectUserPhoto } from "../features/user/userSlice";

function Comment({ comment }) {
  const userPhoto = useSelector(selectUserPhoto);

  return (
    <div className="comment">
      <div className="commentTop">
        <Avatar src={userPhoto} />
        <div className="commentInfo">
          <h6>{comment.author}</h6>
          <p>{comment.body}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
