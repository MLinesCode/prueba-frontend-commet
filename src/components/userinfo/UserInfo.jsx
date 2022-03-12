import UserIcon from '../../assets/user-profile.jpg';
import './userinfo.css';

// eslint-disable-next-line react/prop-types
function UserInfo({ firstName, lastName, registerDate }) {
	return (
		<div className='profile-container'>
			<figure className='profile-image'>
				<img src={UserIcon} alt={firstName} />
			</figure>
			<h2 className='profile-name'>{firstName}</h2>
			<h3 className='profile-lastname'>{lastName}</h3>
			<p className='profile-register'>{registerDate}</p>
		</div>
	);
}

export default UserInfo;
