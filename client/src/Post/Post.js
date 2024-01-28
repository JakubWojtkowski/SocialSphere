import { React, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import Moment from "react-moment";
import "./Post.css";
import { Link } from "react-router-dom";
import Comment from "../Comment/Comment";

function Post({ data }) {
  const [isLike, setIsLike] = useState(false);
  const [isClickedComment, setIsClickedComment] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [post, setPost] = useState([]);

  console.log(post);

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

  const handleCommentClick = () => {
    setIsClickedComment(!isClickedComment);

    // POST request
  };

  const handleCommentChange = (e) => {
    setCommentContent(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    handleCommentClick();
  };

  useEffect(() => {
    setPost(data);
  }, [data]);

  return (
    <div className="post">
      <div className="postTop">
        <Avatar className="postAvatar" src={data.userImage} />
        <div className="info">
          <Link to={`/users/${data.userId}`}>
            <h3>{data.author}</h3>
          </Link>
          <p>
            <Moment format="DD/MM/YYYY">{data.date}</Moment>
          </p>
        </div>
      </div>

      <div className="postBottom">
        <p>{data.title}</p>
      </div>

      <div className="postImg">
        <img src={data.postImg} alt="" width="100%" />
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

        <div className="postOpt" onClick={handleCommentClick}>
          <CommentIcon />
          <p>Dodaj komentarz</p>
        </div>
      </div>

      <div className="postComms">
        {post &&
          post.comments.length !== 0 &&
          post.comments.map((comment, index) => {
            return <Comment key={index} comment={comment} />;
          })}
      </div>

      {isClickedComment ? (
        <form className="addComment" onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder="Treść komentarza..."
            className="addCommentInput"
            onChange={handleCommentChange}
            value={commentContent}
          />
          <br />
          <button type="submit" className="addCommentBtn">
            Dodaj
          </button>
        </form>
      ) : null}
    </div>
  );
}

export default Post;
