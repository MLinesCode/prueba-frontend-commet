import { Link } from 'react-router-dom';
import Favorite from '../../assets/fav-default.png';
import './carduser.css';

// eslint-disable-next-line react/prop-types
function CardUser({ picture, firstName, id }) {
	return (
		<Link to='/profile'>
			<div className='user-container'>
				<img className='user-favorite' src={Favorite} alt='favorite' />
				<figure className='user-image'>
					<img src={picture} alt={firstName} />
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
