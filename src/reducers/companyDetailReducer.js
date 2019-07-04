

export default function (state = [], action = {}) {
    switch (action.type) {
      case 'GET_COMPANY_DETAIL_PENDING':
        return {
          ...state,
          isLoading: true,
          error: false,
        };
  
      case 'GET_COMPANY_DETAIL_FULFILLED':
      console.log('GET_COMPANY_DETAIL_FULFILLED fullfilled',action.payload.data )
        return {
          ...state,
          isLoading: false,
          data: action.payload.data,
          error: false,
        };
  
      case 'GET_COMPANY_DETAIL_REJECTED':
        return {
          ...state,
          isLoading: false,
          error: true,
        };
        case 'ADD_NEW_OFFICE_PENDING':
        return {
          ...state,
          isLoading: true,
          error: false,
        };
  
      case 'ADD_NEW_OFFICE_FULFILLED':
      console.log('ADD_NEW_OFFICE_FULFILLED fullfilled',action.payload.data )
        return {
          ...state,
          isLoading: false,
          AddedOffice: action.payload.data,
          error: false,
        };
  
      case 'ADD_NEW_OFFICE_REJECTED':
        return {
          ...state,
          isLoading: false,
          error: true,
        };
  
      default:
        return {
          ...state,
        };
    }
  }
  