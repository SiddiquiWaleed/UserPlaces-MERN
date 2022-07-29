import React from 'react';
import './PlaceList.css';
import PlaceItem from './PlaceItem';
import Card from '../../shared/components/UIElements/Card';

const PlaceList = (props) => {
	if(props.items.length === 0) {
		return <div className='place-list center'>
			<Card>
				<h2>No Places Found.Maybe Create one?</h2>
				<button>Create Place</button>
			</Card>
		</div>
	}
	return (
		<ul className='place-list'>
			<li>
				{props.items.map(place => (
					<PlaceItem 
						key={place.id} 
						id={place.id} 
						image={place.imageUrl} 
						title={place.title} 
						description={place.description} 
						address={place.address} 
						creatorId= {place.creator} 
						coordinates={place.location} 
					/>
				))}
			</li>
		</ul>
	)
};

export default PlaceList;