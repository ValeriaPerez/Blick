const initialState = {
 	json: []
};

export default function json(state = initialState, action) {
  switch (action.type) {
    case 'GET_JSON_PENDING':
      return {
        ...state,
        loading: true
      };
    case 'GET_JSON_REJECTED':
      return {
        ...state,
        loading: false,
        error: 'Hubo un error'
      };
    case 'GET_JSON_FULFILLED':
      return {
        ...state,
        json: action.payload.data,
        loading: false
      }

    default:
      return state;
  }
}
