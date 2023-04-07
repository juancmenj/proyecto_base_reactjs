import { GET_HOME_SUCCESS, GET_HOME_ERROR } from '../types'

const initialState = {
  home: {
    data: null,
    error: null
  }
}

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOME_SUCCESS: state.home.data = action.data; break;
    case GET_HOME_ERROR: state.home.error = action.error; break;
  }
  debugger
  return state;
}