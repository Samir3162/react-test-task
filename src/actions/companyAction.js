import api from './api';


export const addNewOffice = (companyId) => {
  return({
  type: 'ADD_NEW_OFFICE',
  payload: api.post(`/offices/`, companyId),
})};

export const getOfficeList = (companyId) => {
  return({
  type: 'GET_OFFICE_LIST',
  payload: api.get(`/companies/${companyId}/offices/`),
})};

export const changeHeadquarter = (companyId, officeId) => {
  return({
  type: 'CHANGE_HEADQUARTER_LIST',
  payload: api.patch(`/companies/${companyId}/_change_headquater/${officeId}/`, {
    "headquater": true
}),
})};

