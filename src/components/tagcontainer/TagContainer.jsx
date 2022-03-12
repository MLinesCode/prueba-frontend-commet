import TagItem from '../tagitem/TagItem';
import './tagcontainer.css';

function TagContainer() {
	return (
		<div className='tag-list'>
			<TagItem tag='Technology' />
			<TagItem tag='Home' />
			<TagItem tag='Study' />
		</div>
	);
}

export default TagContainer;
