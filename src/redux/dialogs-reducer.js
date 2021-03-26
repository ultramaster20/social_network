//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
	]
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		//case UPDATE_NEW_MESSAGE_BODY:
		//	return {
		//		...state,
		//		newMessageBody: action.body
		//	};

		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, { id: 7, message: body }]
			};
		default:
			return state;
	}
}

export const sendMessageCreator = (newMessageBody) => {
	return { type: SEND_MESSAGE, newMessageBody };
}

//export const updateNewMessageBodyCreator = (body) => {
//	return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
//}

export default dialogsReducer;