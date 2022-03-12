import './tagitem.css';

function TagItem({ tag }) {
	return (
		<div className='tag-container'>
			<ul className='tag-item'>{tag}</ul>
		</div>
	);
}

export default TagItem;
