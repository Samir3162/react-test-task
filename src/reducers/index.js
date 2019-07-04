import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import signUpUserReducer from './signUpUserReducer';
import companyDetailReducer from './companyDetailReducer'
import companyListReducer from './companyListReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  signUp: signUpUserReducer,
  companyDetail: companyDetailReducer,
  companyList: companyListReducer
});

export default rootReducer;
