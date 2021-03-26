import { usersAPI } from '../api/api';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
	users: [],
	pageSize: 10,
	totalItemsCount: 0,
	currentPage: 1,
	portionSize: 10,
	isFetching: true,
	followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			}

		case SET_USERS:
			return {
				...state, users: action.users
			}

		case SET_CURRENT_PAGE:
			return {
				...state, currentPage: action.currentPage
			}

		case SET_TOTAL_USERS_COUNT:
			return { ...state, totalItemsCount: action.totalItemsCount }

		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching }

		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}

		default:
			return state;
	}
}
//export const followAC = (userId) => ({ type: FOLLOW, userId });
//export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
//export const setUsersAC = (users) => ({ type: SET_USERS, users });
//export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
//export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount });

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalItemsCount) => ({ type: SET_TOTAL_USERS_COUNT, totalItemsCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		let data = await usersAPI.getUsers(currentPage, pageSize);
		dispatch(toggleIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setCurrentPage(currentPage));
		dispatch(setTotalUsersCount(data.totalCount));
	}
}

export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId));
	let response = await apiMethod(userId);

	if (response.data.resultCode === 0) {
		dispatch(actionCreator(userId));
	}
	dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
	}
}

export const unfollow = (userId) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
	}
}

export default usersReducer;


//export const follow = (userId) => (dispatch) => {
//	dispatch(toggleFollowingProgress(true, userId));
//	usersAPI.follow(userId)
//		.then(response => {
//			if (response.data.resultCode == 0) {
//				dispatch(followSuccess(userId));
//			}
//			dispatch(toggleFollowingProgress(false, userId));
//		});
//}

//export const unfollow = (userId) => (dispatch) => {
//	dispatch(toggleFollowingProgress(true, userId));
//	usersAPI.unfollow(userId)
//		.then(response => {
//			if (response.data.resultCode == 0) {
//				dispatch(unfollowSuccess(userId));
//			}
//			dispatch(toggleFollowingProgress(false, userId));
//		});
//}