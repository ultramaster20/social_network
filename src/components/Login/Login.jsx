import React from 'react';
//import { Form, Field } from 'react-final-form';
import { Input, createField } from '../common/FormsControls/FormsControls';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from './../common/FormsControls/FormsControls.module.css';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField('Email', 'email', [required], Input)}
			{createField('Password', 'password', [required], Input, { type: 'password' })}
			{createField(null, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}

			{captchaUrl && <img src={captchaUrl} />}
			{captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})}

			{error && <div className={style.formSummaryError}>
				{error}
			</div>
			}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
	}
	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
		</div>
	)
}

const mapStateToProps = (state) => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);




//const LoginForm = (props) => {
//	return (
//		<form>
//			<div>
//				<input placeholder={'Login'}></input>
//			</div>
//			<div>
//				<input placeholder={'Password'}></input>
//			</div>
//			<div>
//				<input type={'checkbox'} /> remember me
//			</div>
//			<div>
//				<button>Login</button>
//			</div>
//		</form>
//	)
//}


//const LoginReactFinalForm = () => {
//	return (
//		<Form onSubmit={(formData) => { console.log(formData); }}>
//			{({ handleSubmit }) => (
//				<form onSubmit={handleSubmit}>
//					<div>
//						<Field name="login">
//							{({ input }) => (<input placeholder='Login' type='text' {...input} />)}
//						</Field>
//					</div>
//					<div>
//						<Field name="password">
//							{({ input }) => (<input placeholder='Password' type='text' {...input} />)}
//						</Field>
//					</div>
//					<div>
//						<Field name="rememberMe">
//							{({ input }) => (<input type='checkbox' {...input} />)}
//						</Field>
//					</div>
//					<div>
//						<button type='submit'>Login</button>
//					</div>
//				</form>
//			)}
//		</Form >
//	);
//};