import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'services/api';

export const fetchMainVideo = createAsyncThunk(
    'mainVideo/fetchMainVideo',
    async (_, { rejectWithValue, dispatch }) => {
      try {
        const { data } = await $api.get('/main_video/');
        return data;
      } catch (e) {
        return rejectWithValue(e.response.data);
      }
    }
  );

  export const mainVideoSlice = createSlice({
    name: 'mainVideo',
    initialState: {
      mainVideo: {
        error: null,
        isLoading: false,
        data: null,
      },
    },
    extraReducers: (builder) => {
  
      // MAIN_VIDEO
  
      builder.addCase(fetchMainVideo.pending, ({ mainVideo }) => {
        mainVideo.isLoading = true;
      });
      builder.addCase(fetchMainVideo.fulfilled, ({ mainVideo }, action) => {
        mainVideo.isLoading = false;
        mainVideo.data = action.payload;
      });  
    },
  });
  
  
  export default mainVideoSlice.reducer;