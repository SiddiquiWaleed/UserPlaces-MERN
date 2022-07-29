import React, {useCallback, useReducer} from 'react';
import './NewPlace.css';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/components/utils/validators';
import {useForm} from '../../shared/hooks/form-hook';


const NewPlace = () => {

	const [formState, inputHandler] = useForm(
		{
			title: {
				value: '',
				isValid: false,
			},
			description: {
				value: '',
				isValid: false,
			},
			address: {
				value: '',
				isValid: false,
			}
		},
		false
	);
	

	const placeSubmitHandler = event => {
		event.preventDefault();
		console.log(formState.inputs); //send this to backend
	}

	return (
		<form 
			className='place-form' 
			onSubmit={placeSubmitHandler}
		>
			<Input 
				element="input" 
				type="text" 
				id="title" 
				label="Title" 
				validators={[VALIDATOR_REQUIRE()]} 
				errorText='Please enter a valid title.'
				onInput={inputHandler}
			/>
			<Input 
				element="textarea" 
				type="text" 
				id="description" 
				label="Description" 
				validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(5)]} 
				errorText='Please enter a valid description.'
				onInput={inputHandler}
			/>
			<Input 
				element="input" 
				type="text" 
				id="address" 
				label="Address" 
				validators={[VALIDATOR_REQUIRE()]} 
				errorText='Please enter a valid address.'
				onInput={inputHandler}
			/>
			<Button type='submit' disabled={!formState.isValid}>Add Place</Button>
		</form>
	);
}

export default NewPlace;