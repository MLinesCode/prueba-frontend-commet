import { Link } from 'react-router-dom';
import './carduser.css';

function CardUser({ picture, firstName, id }) {
	return (
		<Link to='/profile'>
			<div className='user-container'>
				<figure className='user-image'>
					<img src={picture} alt={picture} />
				</figure>
				<div className='user-info'>
					<p className='user-name'>{firstName}</p>
					<p className='user-id'>{id}</p>
				</div>
			</div>
		</Link>
	);
}

export default CardUser;
