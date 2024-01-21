import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
	return (
		<div className='Login'>
			<div className='facebook'>
				<div className='facebooktext'>SocialSphere</div>
				<div className='title'>Poznawaj nowych ludzi i wchodź w dyskusje.</div>
			</div>
			<div className='loginContainer'>
				<div className='logindetail'>
					<input type='email' placeholder='Adres email' />
					<br></br>
					<input type='Password' placeholder='Hasło' />
					<br></br>
					<button className='btn'>
						<Link to='/MainArea'>Zaloguj się</Link>
					</button>
				</div>
				<div className='forget'>
					<a href='forget'>Zapomniałeś hasła?</a>
					<br></br>
				</div>
				<div className='create'>
					<br></br>
					<button className='btns'>Utwórz nowe konto</button>
				</div>
				<p></p>
				<br></br>
			</div>
		</div>
	);
}

export default LoginPage;
