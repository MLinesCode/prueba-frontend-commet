import TagItem from '../tagitem/TagItem';
import './postitem.css';

function PostItem() {
	return (
		<div className='post-container'>
			<h3 className='post-title'>Titulo del post</h3>
			<h4 className='post-date'>fecha del post</h4>
			<p className='post-content'>
				Lorem ipsum dolor sit amet consectetur elit. Perferendis ab porro ea
				provident voluptate doloribus dolorum voluptatem? Sit, aut. Sapiente
				iste autem maxime repellendus tenetur harum dolorem architecto ea
				voluptas.
			</p>
			<TagItem tag='Humor' />
		</div>
	);
}

export default PostItem;
