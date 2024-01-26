import React from "react";
import "./MainArea.css";
import HeaderArea from "../HeaderArea/HeaderArea";
import CreateBoxPost from "../CreateBoxPost/CreateBoxPost";
import Sidebar from "../Sidebar/Sidebar";
import Post from "../Post/Post";
import { useSelector } from "react-redux";
import {
  selectUserFollowed,
  selectUserPhoto,
} from "../features/user/userSlice";
import { selectPosts } from "../features/post/postSlice";

function MainArea() {
  const userPhoto = useSelector(selectUserPhoto);
  const followedUsers = useSelector(selectUserFollowed);
  const posts = useSelector(selectPosts);

  return (
    <>
      <HeaderArea userImage={userPhoto} />
      <div className="body">
        <CreateBoxPost />
        <Sidebar followedUsers={followedUsers} />
      </div>

      <div className="posts">
        {posts &&
          posts.length > 0 &&
          posts.map((post, index) => {
            return <Post key={index} data={post} />;
          })}
      </div>
    </>
  );
}

export default MainArea;
