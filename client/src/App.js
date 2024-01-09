import React, { useEffect, useState } from "react";

function App() {
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
    <div className="App">
      {!posts
        ? "Loading..."
        : posts.map((post, index) => {
            return (
              <div key={index}>
                <h1>{post.id}</h1>
                <p>{post.title}</p>
                <hr></hr>
              </div>
            );
          })}
    </div>
  );
}

export default App;
