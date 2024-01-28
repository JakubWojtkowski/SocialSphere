import React from 'react';
import { Avatar } from '@mui/material';
import './Comment.css';

function Comment() {
	return (
		<div className='comment'>
			<div className='commentTop'>
				<Avatar />
				<div className='commentInfo'>
					<h6>Adison Rakietson</h6>
					<p>Treść komentarza</p>
				</div>
			</div>
		</div>
	);
}

export default Comment;
