import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import MainArea from './MainArea/MainArea';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' exact={true} element={<LoginPage />} />
				<Route path='/MainArea' element={<MainArea />} />
			</Routes>
		</div>
	);
}

export default App;
