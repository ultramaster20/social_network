import React from 'react';
import { connect } from 'react-redux';
import {
	follow,
	unfollow,
	toggleFollowingProgress,
	getUsers,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	};

	onPageChanged = (pageNumber) => {
		const { pageSize } = this.props;
		this.props.getUsers(pageNumber, this.props.pageSize);
	}
	render() {
		return <>
			{ this.props.isFetching ? <Preloader /> : null}
			<Users totalItemsCount={this.props.totalItemsCount} pageSize={this.props.pageSize}
				portionSize={this.props.portionSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalItemsCount: state.usersPage.totalItemsCount,
		portionSize: state.usersPage.portionSize,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

export default compose(
	connect(mapStateToProps,
		{ follow, unfollow, toggleFollowingProgress, getUsers }),
	//withAuthRedirect
)(UsersContainer);




	//const mapDispatchToProps = (dispatch) => {

//	return {
//		follow: (userId) => {
//			dispatch(followAC(userId));
//		},
//		unfollow: (userId) => {
//			dispatch(unfollowAC(userId));
//		},
//		setUsers: (users) => {
//			dispatch(setUsersAC(users));
//		},
//		setCurrentPage: (pageNamber) => {
//			dispatch(setCurrentPageAC(pageNamber));
//		},
//		setTotalUsersCount: (totalCount) => {
//			dispatch(setTotalUsersCountAC(totalCount));
//		}
//	}
//}
