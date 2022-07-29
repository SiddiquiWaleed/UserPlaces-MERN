import React from 'react';
import PlaceList from '../components/PlaceList';
import {useParams} from 'react-router-dom';

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

const UserPlaces = (props) => {
	const params = useParams().userId;
	const userPlaces = DUMMY_PLACES.filter(place => place.creator === params)
	console.log(userPlaces);
	return (
		<PlaceList items={userPlaces} />
	)
}

export default UserPlaces;