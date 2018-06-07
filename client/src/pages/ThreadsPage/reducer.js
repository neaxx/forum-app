import * as TYPE from './actions';


const initialState = {
  threads: [],
  isLoading: false,
  errorMessage: null
};


export default (state = initialState, action) => {
  switch (action.type) {

    case TYPE.LOAD_THREADS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      })

    case TYPE.LOAD_THREADS_SUCCES:
      return Object.assign({}, state, {
        threads: action.payload,
        isLoading: false,
      })

    case TYPE.LOAD_THREADS_FAILURE:
      return Object({}, state, {
        isLoading: false,
        errorMessage: action.payload.message
      })

    default:
      return state;

  }

};