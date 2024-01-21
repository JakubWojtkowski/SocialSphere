import React, { useEffect, useState } from "react";
import "./MainArea.css";
import HeaderArea from "../HeaderArea/HeaderArea";
import CreateBoxPost from "../CreateBoxPost/CreateBoxPost";
import Sidebar from "../Sidebar/Sidebar";
import Post from "../Post/Post";

function MainArea() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await fetch("/api")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <HeaderArea />
      <div className="body">
        <CreateBoxPost />
        <Sidebar />
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
