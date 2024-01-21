import React from 'react';
import './MainArea.css';
import HeaderArea from '../HeaderArea/HeaderArea';
import CreateBoxPost from '../CreateBoxPost/CreateBoxPost';
import Sidebar from '../Sidebar/Sidebar';
import Post from '../Post/Post';

function MainArea() {
	return (
		<>
			<HeaderArea />
			<div className='body'>
				<CreateBoxPost />
				<Sidebar />
			</div>

			<div className='posts'>
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</>
	);
}

export default MainArea;
