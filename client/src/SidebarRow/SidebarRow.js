import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@mui/material';

function SidebarRow({src}) {
	return (
		<div className='sidebarRow'>			
            {src ? <Avatar src={src}/> : <Avatar />}
            <p className='userName'>Imię Nazwisko</p>
		</div>
	);
}

export default SidebarRow;
