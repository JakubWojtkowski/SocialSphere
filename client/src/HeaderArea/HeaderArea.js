import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {
	FaFacebookMessenger,
	FaBell,
} from 'react-icons/fa';
import './HeaderArea.css';

function HeaderArea() {
	return (
		<div className='HomePage'>
			<div className='header'>
				<div className='first-header'>
					<div className='Search'>
						<AiOutlineSearch style={{ height: '4rem' }} />
						<input placeholder='Szukaj' type='Search' />
					</div>
				</div>

				<div className='middle-header'>
					<a href='#'><h1>SocialSphere</h1></a>
				</div>

				<div className='third-header'>
					<div className='plus'>
						<FaFacebookMessenger fontSize='2rem' />
					</div>
					<div className='plus'>
						<FaBell fontSize='2rem' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeaderArea;
