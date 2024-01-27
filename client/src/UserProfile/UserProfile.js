import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./UserProfile.css";
import HeaderArea from "../HeaderArea/HeaderArea";
import Post from "../Post/Post";
import { selectUserId, selectUserPhoto } from "../features/user/userSlice";
import { selectPosts } from "../features/post/postSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function UserProfile() {
  const { userId } = useParams();
  const posts = useSelector(selectPosts);
  const userPhoto = useSelector(selectUserPhoto);
  const loggedUserId = useSelector(selectUserId);
  const [profileData, setProfileData] = useState({});
  const [followedNum, setFollowedNum] = useState(1);

  const [isFollow, setIsFollow] = useState(false);

  const followChange = async () => {
    setIsFollow(!isFollow);
    isFollow
      ? setFollowedNum(followedNum - 1)
      : setFollowedNum(followedNum + 1);
  };

  useEffect(() => {
    const getUser = async () => {
      await fetch(`/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setProfileData(data);
        })
        .catch((error) => console.error(error));
    };

    getUser();
  }, [userId]);

  return (
    <>
      <HeaderArea userImage={userPhoto} />
      <div className="body">
        <div className="container">
          <div className="profileHeader">
            <Avatar
              src={profileData.userImage}
              sx={{ width: 130, height: 130 }}
            />
            <div className="profileInfo">
              <h3 className="profileName">{profileData.name}</h3>
              <p>
                Liczba obserwujących: <span>{followedNum}</span>
              </p>
              <div className="follow" onClick={followChange}>
                {isFollow ? (
                  <FavoriteIcon className="followClicked" />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </div>
              <div>
                {userId === loggedUserId ? (
                  <button disabled>Obserwuj</button>
                ) : (
                  <button>Obserwuj</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="posts">
        {posts &&
          posts.length > 0 &&
          posts.map((post, index) => {
            if (userId === post.userId) {
              return <Post key={index} data={post} />;
            } else {
              return "";
            }
          })}
      </div>
    </>
  );
}

export default UserProfile;
