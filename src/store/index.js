import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
import modalSlice from './slices/modalSlice';
import productDetailsSlice from './slices/productDetailsSlice';
import productsSlice from './slices/productsSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    user: userSlice,
    products: productsSlice,
    productDetails: productDetailsSlice,
  },
});

// setupListeners(store.dispatch);
