import api from './api';

export const getCompanyList = () => {
  return({
  type: 'GET_ALL_COMPNIES_LIST',
  payload: api.get('companies/list/'),
})};



    

