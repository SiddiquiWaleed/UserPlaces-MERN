import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';

function App() {
  return (
  	<Router>
  		<MainNavigation />
  		<Switch>
  			<>
  			<main>
  				<Route path='/:userId/places' exact>
  					<UserPlaces />
  				</Route>
		  		<Route path='/'>
		  			<Users />
		  		</Route>
		  		<Route path='/place/new' exact>
		  			<NewPlace />
		  		</Route>
		  		<Route path='/places/:placeId' exact>
  					<UpdatePlace />
  				</Route>
		  		<Redirect to='/' />
		  	</main>
		  </>
	  	</Switch>
  	</Router>
  )
}

export default App;
