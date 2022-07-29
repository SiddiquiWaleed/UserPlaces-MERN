import React from 'react';
import './PlaceItem.css';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import {useState} from 'react';
import Modal from '../../shared/components/UIElements/Modal';

const PlaceItem = (props) => {
	const [showModal, setShowModal] = useState(false);

	const showModalHandler = () => {
		setShowModal(true);
	}

	const hideModalHandler = () => {
		setShowModal(false);
	}

	return (
		<div className='place-item'>
			<Card className='place-item__content'>
				<div className='place-item__image'>
					<img src={props.image} alt={props.title} />
				</div>
				<div className='place-item__info'>
					<h2>{props.title}</h2>
					<h3>{props.address}</h3>
					<p>{props.description}</p>
				</div>
				<div className='place-item__actions'>
					<Button 
						inverse 
						onClick={showModalHandler}
					>
						View Place on Map
					</Button>
					<Button to={`/places/${props.id}`}>Edit Place</Button>
					<Button danger>Delete Place</Button>
				</div>
			</Card>
			{ showModal && 
				<Modal 
					header={props.address} 
					contentClass="place-item__modal-content" 
					footerClass="place-item__modal-actions" 
					footer={<Button onClick={hideModalHandler}>CLOSE</Button>}
					show={showModal} 
					onCancel= {hideModalHandler} 
				>
				<div className='map-container'>
					<h2>A Map!</h2>
				</div>
				</Modal> 
			}
		</div>
	)
};

export default PlaceItem;