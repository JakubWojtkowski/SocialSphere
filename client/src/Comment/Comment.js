import React from "react";
import { Avatar } from "@mui/material";
import "./Comment.css";

function Comment({ comment }) {
  console.log(comment);
  return (
    <div className="comment">
      <div className="commentTop">
        <Avatar />
        <div className="commentInfo">
          <h6>{comment.author}</h6>
          <p>{comment.body}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
