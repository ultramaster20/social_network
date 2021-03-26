import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import sidebarReduser from './sidebar-reduser';

let store = {

	_state: {

		profilePage:
		{
			posts: [
				{ id: 1, message: 'Hi, my friendin!!!', likesCount: 12 },
				{ id: 2, message: 'This is my first post!', likesCount: 11 },
				{ id: 3, message: 'This is my first post!', likesCount: 10 },
				{ id: 4, message: 'This is my first post!', likesCount: 144 }
			],
			newPostText: 'Ultramaster',
		},

		dialogsPage:
		{
			dialogs: [
				{ id: 1, name: 'Dmitry' },
				{ id: 2, name: 'Victor' },
				{ id: 3, name: 'Aleksandr' },
				{ id: 4, name: 'Anatoly' },
				{ id: 5, name: 'Vera' },
				{ id: 6, name: 'Inna' }
			],
			messages: [
				{ id: 1, message: 'Hi!' },
				{ id: 2, message: 'Superday!' },
				{ id: 3, message: 'Oueee!' },
				{ id: 4, message: 'Yo' },
				{ id: 5, message: 'Yo' },
				{ id: 6, message: 'Yo' }
			],
			newMessageBody: ''
		},
		sidebar: {}
	},
	_callSubscriber() {
		console.log('State changed');
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	//addPost() {
	//	let newPost = {
	//		id: 7,
	//		message: this._state.profilePage.newPostText,
	//		likesCount: 0
	//	};
	//	this._state.profilePage.posts.push(newPost);
	//	this._state.profilePage.newPostText = '';
	//	this._callSubscriber(this._state);
	//},
	//updateNewPostText(newText) {
	//	this._state.profilePage.newPostText = newText;
	//	this._callSubscriber(this._state);
	//},
	dispatch(action) { // { type: ADD_POST}
		this._state.profilePage = profileReduser(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReduser(this._state.sidebar, action);
		this._callSubscriber(this._state);
	}
}

export default store;
window.store = store;