import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from 'services/AuthService';

export const login = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await AuthService.login(email, password);

      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
      return data.token;
    } catch (e) {
      console.log(e.message);
      return rejectWithValue(e.message);
    }
  }
);

export const register = createAsyncThunk(
  'user/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await AuthService.registration(user);
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
      return data.token;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const checkAuth = createAsyncThunk('user/checkAuth', async () => {
  try {
    const token = localStorage.getItem('access');
    if (token) {
      return token;
    }
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isError: null,
    isSuccess: false,
    isLoading: false,
    errorMessage: '',
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(checkAuth.pending, (state, action) => {
      state.isLoggedIn = true;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = false;
    });
  },
});

export const userSelector = (state) => state.user;

export default userSlice.reducer;
