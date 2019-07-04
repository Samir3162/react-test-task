export default function (state = [], action = {}) {
  switch (action.type) {
    case 'SIGN_UP_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case 'SIGN_UP_USER_FULFILLED':
    console.log('inside reducer  fullfilled',action.payload.data )
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        error: false,
      };

    case 'SIGN_UP_USER_REJECTED':
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
