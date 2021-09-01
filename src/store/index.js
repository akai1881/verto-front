import { configureStore } from '@reduxjs/toolkit';
import mainVideoSlice from './slices/mainVideoSlice';
// import { setupListeners } from '@reduxjs/toolkit/query';
import modalSlice from './slices/modalSlice';
import newsSlice from './slices/newsSlice';
import productDetailsSlice from './slices/productDetailsSlice';
import productsSlice from './slices/productsSlice';
import reviewsSlice from './slices/reviewsSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    user: userSlice,
    products: productsSlice,
    productDetails: productDetailsSlice,
    news: newsSlice,
    reviews: reviewsSlice,
    mainVideo: mainVideoSlice,
  },
});

// setupListeners(store.dispatch);
