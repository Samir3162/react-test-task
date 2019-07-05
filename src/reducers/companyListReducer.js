export default function (state = [], action = {}) {
    switch (action.type) {
      case 'GET_ALL_COMPNIES_LIST_PENDING':
        return {
          ...state,
          isLoading: true,
          error: false,
        };
  
      case 'GET_ALL_COMPNIES_LIST_FULFILLED':
        return {
          ...state,
          isLoading: false,
          data: action.payload.data,
          error: false,
        };
  
      case 'GET_ALL_COMPNIES_LIST_REJECTED':
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
  