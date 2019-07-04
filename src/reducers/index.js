import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import signUpUserReducer from './signUpUserReducer';
import companyDetailReducer from './companyDetailReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  signUp: signUpUserReducer,
  companyDetail: companyDetailReducer
});

export default rootReducer;
