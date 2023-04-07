import { useDispatch } from "react-redux";
// redux/actions.js
import { GET_HOME_SUCCESS, GET_HOME_ERROR } from '../types';

const dispatch = useDispatch();

export const getHomeSuccess = (data) => {
  debugger
  dispatch({
    type: GET_HOME_SUCCESS,
    data: data
  })
};

export const getHomeError = (error) => ({
  type: GET_HOME_ERROR,
  error: error
});