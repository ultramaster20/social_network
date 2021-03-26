import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
	//return (
	//	<Form onSubmit={() => { alert('newMessageBody') }} >
	//		{({ handleSubmit }) => (
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field component={Textarea} name={'newMessageBody'} placeholder='Enter your message'
				validate={[required, maxLength100]} />
			{/*{({ textarea }) => (<textarea placeholder='Enter your message' type='text' values='' {...textarea} />)}*/}
			{/*</Field>*/}
		</div>
		<div><button>Send</button></div>
	</form>
	//	)}
	//</Form >
	//)
}

export default reduxForm({ form: 'dialog-add-message-form' })(AddMessageForm);