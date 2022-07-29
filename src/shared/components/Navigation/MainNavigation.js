import React from 'react';
import MainHeader from './MainHeader';
import './MainNavigation.css';
import {Link} from 'react-router-dom';
import NavLinks from './NavLinks';
import {useState} from 'react';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

const MainNavigation = (props) => {
	const [showDrawer,setShowDrawer] = useState(false);
	const showDrawerHandler = () => {
		setShowDrawer(!showDrawer);
	}
	const closeDrawerHandler = () => {
		setShowDrawer(false);
	}
	return (
		<>
			{showDrawer && <Backdrop onClick={closeDrawerHandler} />}
				<SideDrawer show={showDrawer} onClick={closeDrawerHandler}>
					<nav className='main-navigation__drawer'>
						<NavLinks />
					</nav>
				</SideDrawer>
			<MainHeader>
				<button className='main-navigation__menu-btn' onClick={showDrawerHandler}>
					<span />
					<span />
					<span />
				</button>
				<h1 className='main-navigation__title'>
					<Link to='/'>Your Places</Link>
				</h1>
				<nav className='main-navigation__header-nav'>
					<NavLinks />
				</nav>
			</MainHeader>
		</>
	)
};

export default MainNavigation;