import React, { useState } from "react";
import { Avatar } from "@mui/material";
import "./CreateBoxPost.css";
import { selectUserName, selectUserPhoto } from "../features/user/userSlice";
import { useSelector } from "react-redux";

function CreateBoxPost() {
  const userPhoto = useSelector(selectUserPhoto);
  const userName = useSelector(selectUserName);
  const [postContent, setPostContent] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleImgChange = (e) => {
    setImgUrl(e.target.value);
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    if (postContent === "") return 0;

    await fetch("/posts/addPost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postContent,
        postImage: imgUrl,
        author: userName,
        likes: 0,
        comments: [],
      }),
    })
      .then((res) => {
        if (res.status == "200") {
          console.log("ok");
        }
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    setPostContent("");
    setImgUrl("");
  };

  return (
    <div className="container">
      <Avatar src={userPhoto} />
      <form onSubmit={handlePostSubmit} className="form">
        <textarea
          className="textarea"
          placeholder="Co się u Ciebie dzieje?"
          value={postContent}
          onChange={handlePostChange}
        />
        <input
          type="text"
          placeholder="URL obrazka (opcjonalnie)"
          value={imgUrl}
          onChange={handleImgChange}
        />
        <br />
        <button type="submit" className="button">
          Opublikuj
        </button>
      </form>
    </div>
  );
}

export default CreateBoxPost;
