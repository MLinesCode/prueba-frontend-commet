import { Link } from 'react-router-dom';
import PostItem from '../../components/postitem/PostItem';
import UserInfo from '../../components/userinfo/UserInfo';
import IconBack from '../../assets/back.png';
import TagContainer from '../../components/tagcontainer/TagContainer';
import './profile.css';

function Profile() {
	return (
		<article className='profile-background'>
			<Link to='/'>
				<div className='profile-navigation'>
					<img src={IconBack} alt={IconBack} />
				</div>
			</Link>
			<section className='profile-user'>
				<div className='profile-info'>
					<UserInfo
						picture='https://randomuser.me/api/portraits/'
						firstName='Sara'
						lastName='Andersen'
						registerDate='12 de octubre de 2019'
					/>
				</div>
			</section>
			<section className='profile-posts'>
				<h2>Mis posts</h2>
				<div className='profile-tags'>
					<h3>Tags:</h3>
					<TagContainer />
				</div>
				<PostItem />
				<PostItem />
				<PostItem />
				<PostItem />
				<PostItem />
			</section>
		</article>
	);
}

export default Profile;
