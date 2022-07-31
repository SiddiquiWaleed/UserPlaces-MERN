import React from 'react';
import './PlaceItem.css';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import {useState, useContext} from 'react';
import Modal from '../../shared/components/UIElements/Modal';
import {AuthContext} from '../../shared/context/auth-context';

const PlaceItem = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const showModalHandler = () => {
		setShowModal(true);
	}

	const hideModalHandler = () => {
		setShowModal(false);
	}

	const showDeleteModalHandler = () => {
		setShowDeleteModal(true);
	}

	const hideDeleteModalHandler = () => {
		setShowDeleteModal(false);
	}

	const confirmDeleteHandler = (id) => {
		setShowDeleteModal(false);
	}

	const auth = useContext(AuthContext);

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
					{ auth.isLoggedIn && (
						<Button to={`/places/${props.id}`}>Edit Place</Button>
					)}
					{ auth.isLoggedIn && (
						<Button danger onClick={showDeleteModalHandler}>Delete Place</Button>
					)}
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
			{ showDeleteModal &&
				<Modal
					header="Are you sure?"
					contentClass="place-item__modal-content" 
					footerClass="place-item__modal-actions" 
					footer={
						<>
							<Button danger onClick={confirmDeleteHandler}>DELETE</Button>
							<Button onClick={hideDeleteModalHandler}>CLOSE</Button>
						</>
					}
					show={showDeleteModalHandler} 
					onCancel= {hideDeleteModalHandler}
				>
					<p>Do you want to delete this place?</p>
				</Modal>
			}
		</div>
	)
};

export default PlaceItem;