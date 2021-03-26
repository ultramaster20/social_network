import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({ currentPage, totalItemsCount, pageSize, onPageChanged, portionSize, users, ...props }) => {
	return <div>

		<Paginator portionSize={portionSize} currentPage={currentPage} totalItemsCount={totalItemsCount}
			pageSize={pageSize} onPageChanged={onPageChanged} />
		<div>
			{
				users.map(u => <User
					user={u}
					followingInProgress={props.followingInProgress}
					key={u.id}
					unfollow={props.unfollow}
					follow={props.follow}
				/>
				)
			}
		</div>
	</div >
}

export default Users;