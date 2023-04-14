
import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './Reducers/home';
import navBarReducer from './Reducers/navBar';

export default configureStore({
  reducer: { homeReducer, navBarReducer }
});
