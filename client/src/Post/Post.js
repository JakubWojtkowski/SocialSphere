import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import './Post.css';

function Post({}) {
	const [isLike, setIsLike] = useState(false);

	const likeChange = () => {
		setIsLike(!isLike);
	};

	return (
		<div className='post'>
			<div className='postTop'>
				<Avatar className='postAvatar' />
				<div className='info'>
					<h3>Imię Nazwisko</h3>
					<p>16.20 21.01.2024</p>
				</div>
			</div>

			<div className='postBottom'>
				<p>Treść posta</p>
			</div>

			<div className='postImg'>
				<img
					src='https://yt3.googleusercontent.com/8WMLXd0asjwg4LsD9cWGgFqm17jmTt8I6XAvgFFR37naGITmv2-O3YQs9UN-1R91ssqDrjRR2Q=s900-c-k-c0x00ffffff-no-rj'
					alt=''
					width='100%'
				/>
			</div>

			<div className='postStats'>
				<div className='likes'>
					<ThumbUpIcon />
					<p>
						<span>0</span>
					</p>
				</div>

				<div className='comments'>
					<CommentIcon />
					<p>
						<span>0</span> komentarzy
					</p>
				</div>
			</div>

			<div className='postOptions'>
				<div className='postOpt' onClick={likeChange}>
					{isLike ? (
						<>
							<ThumbUpIcon className='postClicked' />
							<p>Polubiono</p>
						</>
					) : (
						<>
							<ThumbUpIcon />
							<p>Polub</p>
						</>
					)}
				</div>

				<div className='postOpt'>
					<CommentIcon />
					<p>Dodaj komentarz</p>
				</div>
			</div>
		</div>
	);
}

export default Post;
