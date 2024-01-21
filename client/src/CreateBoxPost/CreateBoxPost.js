import React, { useState } from 'react';
import './CreateBoxPost.css';

function CreateBoxPost() {
	const [postContent, setPostContent] = useState('');

	const handlePostChange = e => {
		setPostContent(e.target.value);
	};

	const handlePostSubmit = e => {
		e.preventDefault();

		//dodawanie do servera

		setPostContent('');
	};
    
    return (
		<div className='container'>
			<form onSubmit={handlePostSubmit} className='form'>
				<textarea
					className='textarea'
					placeholder='Co się u Ciebie dzieje?'
					value={postContent}
					onChange={handlePostChange}
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