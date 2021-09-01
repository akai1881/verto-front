import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';
import AuthService from 'services/AuthService';

export const login = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await AuthService.login(email, password);

    const { data } = response;

    if (response.status >= 200 && response.status <= 300) {
      localStorage.setItem('access', data.access);
      console.log(data);
      localStorage.setItem('refresh', data.refresh);
      const _user = jwt_decode(data.access);
      return { ..._user, email: email };
    } else {
      return rejectWithValue(data);
    }
  } catch (e) {
    console.log(e.response.data.detail);
    return rejectWithValue(e.response.data.detail);
  }
});

export const signup = createAsyncThunk('user/signup', async (user, { rejectWithValue }) => {
  try {
    const response = await AuthService.registration(user);

    const { data } = response;

    if (response.status >= 200 && response.status <= 300) {
      return data;
    } else {
      console.log(data);
      return rejectWithValue(data);
    }
  } catch (e) {
    const data = e.response.data;

    const errorArray = [];

    for (const err in data) {
      if (Array.isArray(data[err])) {
        errorArray.push(...data[err]);
      } else {
        errorArray.push(data[err]);
      }
    }

    return errorArray;
  }
});

export const checkAuth = createAsyncThunk('user/checkAuth', async (access, { rejectWithValue }) => {
  try {
    let _user = jwt_decode(access);

    console.log(_user.exp);

    if (Date.now() > _user.exp * 1000) {
      const refresh = localStorage.getItem('refresh');

      if (!refresh) {
        return rejectWithValue('No refresh token provided');
      }

      const response = await AuthService.refresh(refresh);

      localStorage.setItem('access', response.data.access);

      _user = jwt_decode(response.data.access);
      return _user;
    } else {
      console.log('not worked');
    }

    return _user;
  } catch (e) {
    return rejectWithValue(e.response.data.detail);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isError: null,
    isSuccess: false,
    isAuth: false,
    isLoading: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;

      return state;
    },
    logout: (state) => {
      state.isAuth = false;
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    },
  },
  extraReducers: (builder) => {
    // ============ LOGIN REDUCERS =============
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isSuccess = true;
      state.isAuth = true;
      state.isError = false;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.user = null;
      state.isSuccess = false;
      state.isAuth = false;
      state.isError = true;
      state.errorMessage = action.payload;
      state.isLoading = false;
    });
    // ===========================================

    // ============ SIGNUP REDUCERS =============

    builder.addCase(signup.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = null;
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isError = true;
      state.errorMessage = action.payload;
      state.isAuth = false;
      state.user = null;
      state.isSuccess = false;
      state.isLoading = false;
    });
    // ===========================================

    // ============ CHECK AUTH REDUCERS =============

    // builder.addCase(checkAuth.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      // state.isSuccess = true;
      state.isLoading = false;
    });
    builder.addCase(checkAuth.rejected, (state, action) => {
      state.user = null;
      state.isLoading = false;
      // state.isError = true;
      state.isAuth = false;
      state.errorMessage = action.payload;
    });
  },
});

export const { clearState, logout } = userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer;

// tester@test.com
// qwerty
