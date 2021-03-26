import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator } from '../../../redux/profile-reducer';
//import { Form, Field } from 'react-final-form';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const MyPosts = (props) => {

	let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

	let newPostElement = React.createRef();

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<AddNewPostFormRedux onSubmit={onAddPost} />
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
}

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
	//return
	//<Form>
	//	{({ handleSubmit }) => (
	return < form onSubmit={props.handleSubmit} >
		<div>
			<Field name='newPostText' component={Textarea} placeholder={'Post message'}
				validate={[required, maxLength10]} />
		</div>
		<div>
			<button>Add post!</button>
		</div>
	</ form>
	//	)}
	//</Form>
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

export default MyPosts;



	//let newArray = oldArray.map((el) => { if (isMailName(el)) { return 1; } else { return 0; } })
	//let newArray = oldArray.map((el) => { return isMailName(el) ? 1 : 0; })
	//let newArray = oldArray.map((el) => { isMailName(el) ? 1 : 0; })



	//let onPostChange = () => {
	//	let text = newPostElement.current.value;
	//	props.updateNewPostText(text);
	//}