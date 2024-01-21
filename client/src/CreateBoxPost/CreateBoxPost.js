import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import './CreateBoxPost.css';

function CreateBoxPost() {
	const [postContent, setPostContent] = useState('');
	const [imgUrl, setImgUrl] = useState('');

	const handlePostChange = e => {
		setPostContent(e.target.value);
	};

	const handleImgChange = e => {
		setImgUrl(e.target.value);
	};

	const handlePostSubmit = e => {
		e.preventDefault();

		//dodawanie do servera

		setPostContent('');
		setImgUrl('');
	};

	return (
		<div className='container'>
			<Avatar />
			<form onSubmit={handlePostSubmit} className='form'>
				<textarea
					className='textarea'
					placeholder='Co się u Ciebie dzieje?'
					value={postContent}
					onChange={handlePostChange}
				/>
				<input
					type='text'
					placeholder='URL obrazka (opcjonalnie)'
					value={imgUrl}
					onChange={handleImgChange}
				/>
				<br />
				<button type='submit' className='button'>
					Opublikuj
				</button>
			</form>
		</div>
	);
}

export default CreateBoxPost;
