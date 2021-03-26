import React, { useEffect, useState } from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const ProfileStatusWithHooks = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	const activateEditMode = () => {
		setEditMode(true);
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
		//изменение каждой буквы
	}

	return (
		<div>
			{!editMode &&
				<div>
					<b>Status:</b><span onDoubleClick={activateEditMode}>{props.status || "------"}</span>
				</div>
			}

			{
				editMode &&
				<div>
					<input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
				</div>
			}
		</div >
	)
}
export default ProfileStatusWithHooks;