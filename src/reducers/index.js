import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import signUpUserReducer from './signUpUserReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  signUp: signUpUserReducer,
});

export default rootReducer;
