import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';



const configureStore = ( preloadedState = {}) => {
    return createStore(rootReducer,
    preloadedState,
    applyMiddleware(logger))
};

export default configureStore;