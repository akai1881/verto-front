import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'services/api';

export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async (_, { rejectWithValue, dispatch }) => {
      try {
        const { data } = await $api.get('/review/');
        console.log(data);
        return data;
      } catch (e) {
        return rejectWithValue(e.response.data);
      }
    }
);

export const createReviews = createAsyncThunk(
  'reviews/createReview',
  async (newReview, { rejectWithValue, dispatch }) => {
    console.log('review from slice', newReview);
    try {
      const { data } = await $api.post('/review/', newReview);
      console.log('slice data', data);
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
      reviews: {
        error: null,
        isLoading: false,
        data: [],
      },
    },
    extraReducers: (builder) => {
  
      // REVIEWS
  
      builder.addCase(fetchReviews.pending, ({ reviews }) => {
        reviews.isLoading = true;
      });
      builder.addCase(fetchReviews.fulfilled, ({ reviews }, action) => {
        reviews.isLoading = false;
        reviews.data = action.payload;
      });  
      builder.addCase(createReviews.pending, ({ reviews }) => {
        reviews.isLoading = true;
      });
      builder.addCase(createReviews.fulfilled, ({ reviews }, action) => {
        reviews.isLoading = false;
      });  

    },
});
export const reviewsSelector = (state) => state.reviews.reviews;

export default reviewsSlice.reducer;