import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../shared/components/utils/validators';
import './NewPlace.css';
import {useForm} from '../../shared/hooks/form-hook';


const DUMMY_PLACES  = [
	{
		id: 'p1',
		title: 'Bahria Grand Mosque',
		description: 'One of the biggest mosques of Asia',
		imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_brown.png',
		address: 'Bahria Town Main Blvd, Sector C Janiper Block Sector C Bahria Town, Lahore, Punjab, Pakistan',
		location: {
			lat: 31.3679949,
			lng: 74.1831267
		},
		creator: 'u1'
	},
	{
		id: 'p2',
		title: 'Bahria Grand Mosque',
		description: 'One of the biggest mosques of Asia',
		imageUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_brown.png',
		address: 'Bahria Town Main Blvd, Sector C Janiper Block Sector C Bahria Town, Lahore, Punjab, Pakistan',
		location: {
			lat: 31.3679949,
			lng: 74.1831267
		},
		creator: 'u2'
	}
]

const UpdatePlace = () => {

	const placeId = useParams().placeId;

	const [formState, inputHandler, setFormData] = useForm(
		{
			title: {
				value: '',
				isValid: false,
			},
			description: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	const identifiedPlace = DUMMY_PLACES.find(place => (placeId === place.id));

	useEffect(() => {

		setFormData(
		{
			title: {
				value: identifiedPlace.title,
				isValid: true,
			},
			description: {
				value: identifiedPlace.description,
				isValid: true,
			},
		},
		true
	);

	},[setFormData, identifiedPlace]);

	if(!identifiedPlace) {
		return (
			<div className='center'>
				<h2>Couldn't find any place</h2>
			</div>
		)
	}

	const placeUpdateSubmitHandler = event => {
		event.preventDefault();
		console.log(formState.inputs);
	}


	return (
		formState.inputs.title.value && <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
			<Input 
				id="title" 
				element="input"
				type="text"
				label="Title"
				validators={[VALIDATOR_REQUIRE()]}
				errorText="Please enter a valid title"
				onInput= {inputHandler}
				value={formState.inputs.title.value}
				valid={formState.inputs.title.isValid}
			/>
			<Input 
				id="description" 
				element="textarea"
				type="text"
				label="Description"
				validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(5)]}
				errorText="Please enter a valid description"
				onInput= {inputHandler}
				value={formState.inputs.description.value}
				valid={formState.inputs.description.isValid}
			/>
			<Button type="submit" disabled={!formState.isValid}>Update Place</Button>
		</form>
	)

};

export default UpdatePlace;