
import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './Reducers/home';

export default configureStore({
  reducer: { homeReducer }
});
