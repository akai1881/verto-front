import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
import modalSlice from './slices/modalSlice';
import productsSlice from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    products: productsSlice,
  },
});

// setupListeners(store.dispatch);
