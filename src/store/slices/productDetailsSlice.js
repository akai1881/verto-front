import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'services/api';

// TODO Create category slice and move all related staff there

export const fetchDetails = createAsyncThunk(
  'productDetails/fetchDetails',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await $api.get(`/product/${id}`);
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: {
    data: null,
    isLoading: true,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchDetails.rejected, (state, action) => {
      state.error = true;
      state.data = {};
      state.isLoading = false;
    });
  },
});

export default productDetailsSlice.reducer;
