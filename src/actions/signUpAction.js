import api from './api';

const signUp = (companyDetail) => {
  return({
  type: 'SIGN_UP_USER',
  payload: api.post('/companies/', companyDetail),
})};

export default signUp;
