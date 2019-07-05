

export default function (state = [], action = {}) {
    switch (action.type) {
      case 'GET_COMPANY_DETAIL_PENDING':
        return {
          ...state,
          isLoading: true,
          error: false,
        };
  
      case 'GET_COMPANY_DETAIL_FULFILLED':
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

      
        case 'GET_OFFICE_LIST_PENDING':
        return {
          ...state,
          isLoading: true,
          error: false,
        };
  
      case 'GET_OFFICE_LIST_FULFILLED':
        return {
          ...state,
          isLoading: false,
          officeListdata: action.payload.data,
          error: false,
        };
  
      case 'GET_OFFICE_LIST_REJECTED':
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
  