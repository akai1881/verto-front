import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import $api from 'services/api';

export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $api.get('/category');
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const fetchGoodsByCategory = createAsyncThunk(
  'products/fetchGoodsByCategory',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await $api.get('/category');
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    categories: {
      error: null,
      isLoading: false,
      data: [],
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, ({ categories }, action) => {
      categories.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, ({ categories }, action) => {
      categories.isLoading = false;
      categories.data = action.payload;
      categories.error = null;
    });
    builder.addCase(fetchCategories.rejected, ({ categories }, action) => {
      categories.isLoading = false;
      categories.error = action.payload;
      categories.data = [];
    });
  },
});

export default productsSlice.reducer;
