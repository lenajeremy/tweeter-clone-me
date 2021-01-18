import userReducer from './user.reducer';
import {combineReducers} from 'redux';

const headerVisibility = function(state = true, action){
    switch(action.type){
        case 'headerVisibility':
            return action.payload;
        default:
            return state;
    }
}
const changeColor = function (state = {special: '#2f80ed', background: '#ffffff', text: '#333333'}, action){
	switch (action.type){
		case 'colorChange':
			console.log(action)
			return {...state, [action.payload.key]: action.payload.value}
		default:
			return state;
	}
}

const postReducers = function(state = [], action){
	switch(action.type){
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