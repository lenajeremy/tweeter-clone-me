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
const combinedReducers = combineReducers({
    user: userReducer,
    headerVisible: headerVisibility
})

export default combinedReducers;