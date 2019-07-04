import api from './api';

export const getCompanyDetail = (companyId) => {
  return({
  type: 'GET_COMPANY_DETAIL',
  payload: api.get(`/companies/detail/${companyId}`),
})};

export const addNewOffice = (companyId) => {
  console.log('company ID ', companyId)
  return({
  type: 'ADD_NEW_OFFICE',
  payload: api.post(`/api/offices/`, companyId),
})};
