import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar } from "@mui/material";
import "./HeaderArea.css";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../features/post/postSlice";
import { Link } from "react-router-dom";
import { selectUserId } from "../features/user/userSlice";

function HeaderArea({ userImage }) {
  const dispatch = useDispatch();
  const loggedUserId = useSelector(selectUserId);

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

        <Link to={`/users/${loggedUserId}`}>
          <div className="third-header">
            <Avatar src={userImage} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HeaderArea;
