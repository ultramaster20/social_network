//import React from 'react';
//import styles from './users.module.css';
//import * as axios from 'axios';
//import userPhoto from '../../assets/images/user.png';

//let Users = (props) => {

//	let getUsers = () => {
//		if (props.users.length === 0) {
//			axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//				props.setUsers(response.data.items);

//				//	[
//				//	{
//				//		id: 1, photoUrl: 'https://miro.medium.com/max/2400/1*7nCv2EyQlzl8CcAEDixeYg@2x.jpeg',
//				//		followed: true, fullName: 'Dmitry', status: 'I am happy!',
//				//		location: { city: 'Voroneg', country: 'Russia' }
//				//	},
//				//	{
//				//		id: 2, photoUrl: 'https://miro.medium.com/max/2400/1*7nCv2EyQlzl8CcAEDixeYg@2x.jpeg',
//				//		followed: true, fullName: 'Vera', status: 'I am happy too!',
//				//		location: { city: 'New York', country: 'USA' }
//				//	},
//				//	{
//				//		id: 3, photoUrl: 'https://miro.medium.com/max/2400/1*7nCv2EyQlzl8CcAEDixeYg@2x.jpeg',
//				//		followed: false, fullName: 'Anatoly', status: 'Sleep',
//				//		location: { city: 'Saratov', country: 'Russia' }
//				//	}
//				//]

//			});
//		}
//	}

//	return <div>
//		<button onClick={getUsers}>Get Users</button>
//		{
//			props.users.map(u => <div key={u.id}>
//				<span>
//					<div>
//						<img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
//					</div>
//					<div>
//						{u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
//							: <button onClick={() => { props.follow(u.id) }}>Follow</button>}
//					</div>
//				</span>
//				<span>
//					<span>
//						<div>{u.name}</div>
//						<div>{u.status}</div>
//					</span>
//					<span>
//						<div>{'u.location.country'}</div>
//						<div>{'u.location.city'}</div>
//					</span>
//				</span>
//			</div>)
//		}
//	</div>
//}

//export default Users;