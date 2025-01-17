import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { movieReducer } from "../features/counter/counterSlice";
export const store = configureStore({
  reducer: {
    movie: movieReducer()
  },
});