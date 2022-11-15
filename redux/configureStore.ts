import {configureStore} from '@reduxjs/toolkit';
import api from './middleware/api';
import reducer from './reducers/reducer';

const store = configureStore({
  reducer,
  middleware: [api],
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export default store;