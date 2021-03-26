import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
//import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		//updateNewMessageBody: (body) => {
		//	dispatch(updateNewMessageBodyCreator(body));
		//},
		sendMessage: (newMessageBody) => {
			dispatch(sendMessageCreator(newMessageBody));
		}
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);








//const DialogsContainer = () => {

//	return (<StoreContext.Consumer>
//		{(store) => {
//			let state = store.getState().dialogsPage;

//			let onSendMessageClick = () => {
//				store.dispatch(sendMessageCreator());
//			}

//			let onNewMessageChange = (body) => {
//				store.dispatch(updateNewMessageBodyCreator(body));
//			}

//			return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
//		}
//		}
//	</StoreContext.Consumer>
//	)
//}