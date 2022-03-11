import LogoCommet from '../assets/comet.png';
import SearchIcon from '../assets/search.png';
import './header.css';

function Header() {
	return (
		<header>
			<div className='header-container'>
				<p className='header-title'>Commet</p>
				<div className='header-logo'>
					<img src={LogoCommet} alt={LogoCommet} />
				</div>
			</div>
			<div className='header-search'>
				<img src={SearchIcon} alt='icono de busqueda' />
			</div>
		</header>
	);
}

export default Header;
