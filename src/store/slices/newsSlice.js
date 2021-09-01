import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'services/api';

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (_, { rejectWithValue, dispatch }) => {
      try {
        const { data } = await $api.get('/news/');
        console.log(data);
        return data;
      } catch (e) {
        return rejectWithValue(e.response.data);
      }
    }
  );

  export const newsSlice = createSlice({
    name: 'news',
    initialState: {
      news: {
        error: null,
        isLoading: false,
        data: null,
      },
    },
    extraReducers: (builder) => {
  
      // NEWS
  
      builder.addCase(fetchNews.pending, ({ news }) => {
        news.isLoading = true;
      });
      builder.addCase(fetchNews.fulfilled, ({ news }, action) => {
        news.isLoading = false;
        news.data = action.payload;
      });  
    },
  });
  export const newsSelector = (state) => state.news.news;

  export default newsSlice.reducer;