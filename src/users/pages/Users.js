import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
	const USERS = [
		{id: 'u1', name:'waleed', image:'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ', places: 3},
		{id: 'u2', name:'test', image:'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ', places: 3},
	]
	return <UsersList items={USERS}/>
}

export default Users;