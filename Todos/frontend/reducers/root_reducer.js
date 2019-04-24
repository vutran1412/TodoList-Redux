import { combineReducers } from 'redux';
import todoReducer from './todos_reducer';


const rootReducer = combineReducers({
    todo: todoReducer
});


export default rootReducer;