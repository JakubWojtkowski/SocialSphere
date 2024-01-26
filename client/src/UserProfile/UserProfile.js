import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './UserProfile.css';
import HeaderArea from '../HeaderArea/HeaderArea';
import Sidebar from '../Sidebar/Sidebar';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';
import {
	selectUserFollowed,
	selectUserPhoto,
} from '../features/user/userSlice';
import { selectPosts } from '../features/post/postSlice';

function UserProfile() {
	const userPhoto = useSelector(selectUserPhoto);
	const followedUsers = useSelector(selectUserFollowed);
	const posts = useSelector(selectPosts);

	const [isFollow, setIsFollow] = useState(false);

	const followChange = async () => {
		setIsFollow(!isFollow);
		//let updateFollows = parseInt(data.follows) + 1;

		// if (isLike) {
		//   await fetch(`/posts/update/${data._id}`, {
		//     method: "PATCH",
		//     headers: { "Content-Type": "application/json" },
		//     body: JSON.stringify({
		//       likes: updateLikes,
		//     }),
		//   })
		//     .then((res) => {
		//       if (res.status === 200) {
		//         console.log("ok");
		//       }
		//     })
		//     .then((data) => console.log(data))
		//     .catch((error) => console.error(error));
		// }
	};

	return (
		<>
			<HeaderArea userImage={userPhoto} />
			<div className='body'>
				<div className='container'>
					<div className='profileHeader'>
						<Avatar src={userPhoto} sx={{ width: 130, height: 130 }} />
						<div className='profileInfo'>
							<h3 className='profileName'>Adison Rakietson</h3>
							<p>
								Liczba obserwujących: <span>0</span>
							</p>
							<div className='follow' onClick={followChange}>
								{isFollow ? (
									<FavoriteIcon className='followClicked' />
								) : (
									<FavoriteBorderIcon />
								)}
							</div>
						</div>
					</div>
				</div>
				<Sidebar followedUsers={followedUsers} />
			</div>

			{/* jakieś wyszukiwanie tylko postów z id ziomeczka którego to profil */}
			<div className='posts'>
				{posts &&
					posts.length > 0 &&
					posts.map((post, index) => {
						return <Post key={index} data={post} />;
					})}
			</div>
		</>
	);
}

export default UserProfile;
