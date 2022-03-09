import React from 'react';
import './carduser.css';

function CardUser() {
	return (
		<div className='user-container'>
			<figure className='user-image'>
				<img src='' alt='' />
			</figure>
			<div className='user-info'>
				<p className='user-name'>Nombre del usuario</p>
				<p className='user-id'>ID</p>
			</div>
		</div>
	);
}

export default CardUser;
