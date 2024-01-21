import React from 'react';
import './MainArea.css';
import HeaderArea from '../HeaderArea/HeaderArea';
import CreateBoxPost from '../CreateBoxPost/CreateBoxPost';

function MainArea() {
	

	return (
		<>
			<HeaderArea />
			<div className='body'>
				<CreateBoxPost />
			</div>
		</>
	);
}

export default MainArea;
