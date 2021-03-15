import userReducer from './user.reducer';
import { combineReducers } from 'redux';

const headerVisibility = function (state = true, action) {
	switch (action.type) {
		case 'headerVisibility':
			return action.payload;
		default:
			return state;
	}
}

const specialColor = localStorage.getItem('special') || '#2f80ed';
const backgroundColor = localStorage.getItem('background') || '#ffffff';
const textColor = localStorage.getItem('text') || '#333333';

const changeColor = function (state = { special: specialColor, background: backgroundColor, text: textColor }, action) {
	switch (action.type) {
		case 'colorChange':
			localStorage.setItem(action.payload.key, action.payload.value);
			return { ...state, [action.payload.key]: action.payload.value }
		default:
			return state;
	}
}

const postReducers = function (state = [], action) {
	switch (action.type) {
		case 'newPost':
			return [action.payload, ...state];
		default:
			return state;
	}
}

const combinedReducers = combineReducers({
	colorPalette: changeColor,
	user: userReducer,
	headerVisible: headerVisibility,
	posts: postReducers
})

export default combinedReducers;