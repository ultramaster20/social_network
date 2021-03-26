import React from 'react';
import { Redirect } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
//import { Form, Field } from 'react-final-form';
import { Field, reduxForm } from 'redux-form';
import AddMessageForm from './AddMessageForm';

const Dialogs = (props) => {

	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
	let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />);
	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = (values) => {
		props.sendMessage(values.newMessageBody);
	}

	//let onNewMessageChange = (e) => {
	//	let body = e.target.value;
	//	props.updateNewMessageBody(body);
	//};

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>
					{messagesElements}
				</div>
				<AddMessageForm onSubmit={onSendMessageClick} />
			</div>
		</div >
	)
}

export default Dialogs;