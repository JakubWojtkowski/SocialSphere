import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar } from "@mui/material";
import "./HeaderArea.css";
import { useDispatch } from "react-redux";
import { setPosts } from "../features/post/postSlice";

function HeaderArea({ userImage }) {
  const dispatch = useDispatch();

  const getPosts = async () => {
    await fetch("/posts")
      .then((res) => res.json())
      .then((data) => {
        let tempPosts = data;
        dispatch(setPosts(tempPosts));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPosts();
  }, []);

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
