import { React, useState } from "react";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import "./Post.css";

function Post({ data }) {
  const [isLike, setIsLike] = useState(false);

  const likeChange = async () => {
    setIsLike(!isLike);
    let updateLikes = parseInt(data.likes) + 1;

    if (isLike) {
      await fetch(`/posts/update/${data._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          likes: updateLikes,
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            console.log("ok");
          }
        })
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="post">
      <div className="postTop">
        <Avatar className="postAvatar" src={data.userImage} />
        <div className="info">
          <h3>{data.author}</h3>
          <p>{data.date}</p>
        </div>
      </div>

      <div className="postBottom">
        <p>{data.title}</p>
      </div>

      <div className="postImg">
        <img src={data.postImage} alt="" width="100%" />
      </div>

      <div className="postStats">
        <div className="likes">
          <ThumbUpIcon />
          <p>
            <span>{data.likes}</span>
          </p>
        </div>

        <div className="comments">
          <CommentIcon />
          <p>
            <span>{data.comments.length}</span> komentarzy
          </p>
        </div>
      </div>

      <div className="postOptions">
        <div className="postOpt" onClick={likeChange}>
          {isLike ? (
            <>
              <ThumbUpIcon className="postClicked" />
              <p>Polubiono</p>
            </>
          ) : (
            <>
              <ThumbUpIcon />
              <p>Polub</p>
            </>
          )}
        </div>

        <div className="postOpt">
          <CommentIcon />
          <p>Dodaj komentarz</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
