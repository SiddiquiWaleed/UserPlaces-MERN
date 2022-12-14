import React,{useState, useContext} from 'react';
import {useForm} from '../../shared/hooks/form-hook';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_EMAIL,VALIDATOR_MINLENGTH,VALIDATOR_REQUIRE} from '../../shared/components/utils/validators';
import '../../places/pages/NewPlace.css';
import Card from '../../shared/components/UIElements/Card';
import './Auth.css';
import {AuthContext} from '../../shared/context/auth-context';

const Auth = () => {

	const auth = useContext(AuthContext);

	const [isLoginMode, setIsLoginMode] = useState(true);

	const [formState, inputHandler, setFormData] = useForm(
		{
			email: {
				value: '',
				isValid: false,
			},
			password: {
				value: '',
				isValid: false,
			}
		},
		false
	);

	const authSubmitHandler = (event) => {
		event.preventDefault();
		console.log(formState.inputs);
		auth.login();
	}

	const switchModeHandler = () => {
		if(!isLoginMode) {
			setFormData({
				...formState.inputs,
				name: undefined
			},
			formState.inputs.email.isValid && formState.inputs.password.isValid
			)
		}
		else {
			setFormData({
				...formState.inputs,
				name: {
					value: '',
					isValid: false
				}
			})
		}
		setIsLoginMode(prevMode => !prevMode);
	}

	return (
		<Card className='authentication'>
			<h2>Login Required</h2>
			<form 
				className='place-form'
				onSubmit={authSubmitHandler}
			>
			{!isLoginMode && 
				<Input 
					id="name"
					element="input"
					type="text"
					label="UserName"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid username"
					onInput= {inputHandler}
				/>
			}
				<Input 
					id="email" 
					element="input"
					type="email"
					label="Email"
					validators={[VALIDATOR_EMAIL()]}
					errorText="Please enter a valid email"
					onInput= {inputHandler}
				/>
				<Input 
					id="password" 
					element="input"
					type="password"
					label="Password"
					validators={[VALIDATOR_MINLENGTH(8)]}
					errorText="Please enter a 8 characters long password"
					onInput= {inputHandler}
				/>
				<Button type='submit' disabled={!formState.isValid}>{isLoginMode ? 'LOGIN' : 'SIGNUP'}</Button>
			</form>
			<Button inverse onClick={switchModeHandler}>SWITCH TO {!isLoginMode ? 'LOGIN' : 'SIGNUP'}</Button>
		</Card>
	)
}

export default Auth;