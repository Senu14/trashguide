import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import formReducer from './reducers'; // Import your formReducer

const rootReducer = combineReducers({
  formReducer, // Make sure it's named as formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
