import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src='https://images.chesscomfiles.com/uploads/v1/user/14424296.76be792d.1200x1200o.a7feefcbd6cb.jpeg' />
			{props.message}
			<div>
				<span>like</span> {props.likesCount}
			</div>
		</div>
	)
}

export default Post;