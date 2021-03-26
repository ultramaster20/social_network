import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

//1. test data
//2. action
//3. expectation

let state = {
	posts: [
		{ id: 1, message: 'Hi, my friendin!!!', likesCount: 12 },
		{ id: 2, message: 'This is my first post!', likesCount: 11 },
		{ id: 3, message: 'This is my first post!', likesCount: 10 },
		{ id: 4, message: 'This is my first post!', likesCount: 144 }
	]
};

test('new post should be added', () => {
	let action = addPostActionCreator('ultramaster20@gmail.com');

	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(5);
});

test('message should be added', () => {
	let action = addPostActionCreator('ultramaster20@gmail.com');

	let newState = profileReducer(state, action);

	expect(newState.posts[4].message).toBe('ultramaster20@gmail.com');
});

test('after deleting length of message should be decrement', () => {
	let action = deletePost(1);

	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(3);
});

test('after deleting length should t be decrement if id is incorrect', () => {
	let action = deletePost(1000);

	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(4);
});



