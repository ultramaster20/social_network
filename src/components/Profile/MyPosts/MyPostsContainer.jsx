import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
//import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		//updateNewPostText: (text) => {
		//	let action = updateNewPostTextActionCreator(text);
		//	dispatch(action);
		//},
		addPost: (newPostText) => {
			dispatch(addPostActionCreator(newPostText));
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;





//const MyPostsContainer = () => {
//	//let newArray = oldArray.map((el) => { if (isMailName(el)) { return 1; } else { return 0; } })
//	//let newArray = oldArray.map((el) => { return isMailName(el) ? 1 : 0; })
//	//let newArray = oldArray.map((el) => { isMailName(el) ? 1 : 0; })

//	//let state = props.store.getState();

//	//let addPost = () => {
//	//	props.store.dispatch(addPostActionCreator());
//	//}

//	//let onPostChange = (text) => {
//	//	//props.updateNewPostText (text);
//	//	let action = updateNewPostTextActionCreator(text);
//	//	props.store.dispatch(action);
//	//}

//	return (<StoreContext.Consumer>
//		{(store) => {

//			let state = store.getState();
//			let addPost = () => {
//				store.dispatch(addPostActionCreator());
//			}

//			let onPostChange = (text) => {
//				//props.updateNewPostText (text);
//				let action = updateNewPostTextActionCreator(text);
//				store.dispatch(action);
//			}

//			return <MyPosts updateNewPostText={onPostChange}
//				addPost={addPost}
//				posts={state.profilePage.posts}
//				newPostText={state.profilePage.newPostText} />
//		}
//		}
//	</StoreContext.Consumer>
//	)
//}
