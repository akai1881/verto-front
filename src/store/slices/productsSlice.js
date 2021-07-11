import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'services/api';

// TODO Create category slice and move all related staff there

export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await $api.get('/category');
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const fetchTopCategories = createAsyncThunk(
  'products/fetchTopCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $api.get('/top_category/');
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const fetchPopularProducts = createAsyncThunk(
  'products/fetchPopularProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $api.get('/product/?ordering=-views');

      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const fetchNewProducts = createAsyncThunk(
  'products/fetchNewProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await $api.get('/product/');
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

// export const fetchPopularCategories = createAsyncThunk(
//   'products/fetchPopularCategories',
//   async (_) => {
//     try {
//       const {data} = await $api.get('/products/?views=-views')
//     }
//   }
// )

export const fetchGoodsByCategory = createAsyncThunk(
  'products/fetchGoodsByCategory',
  async (category, { rejectWithValue }) => {
    try {
      const { data } = await $api.get(`/product/?category=${category}`);
      return data;
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
      topCategories: [],
      topCategoriesLoading: false,
      isLoading: false,
      data: [],
    },
    products: {
      error: null,
      count: 0,
      isLoading: false,
      data: [],
    },
    popularProducts: {
      error: null,
      isLoading: false,
      data: [],
    },
    newProducts: {
      data: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: (builder) => {
    // TOP CATEGORIES
    builder.addCase(fetchTopCategories.pending, ({ categories }, action) => {
      categories.topCategoriesLoading = true;
    });
    builder.addCase(fetchTopCategories.fulfilled, ({ categories }, action) => {
      categories.topCategories = action.payload;
      categories.topCategoriesLoading = false;
    });

    // CATEGORIES
    builder.addCase(fetchCategories.pending, ({ categories }) => {
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

    // FILTERNG PRODUCTS
    builder.addCase(fetchGoodsByCategory.pending, ({ products }) => {
      products.isLoading = true;
    });
    builder.addCase(fetchGoodsByCategory.fulfilled, ({ products }, action) => {
      products.isLoading = false;
      products.data = action.payload.results;
      products.count = action.payload.count;
      products.error = null;
    });
    builder.addCase(fetchGoodsByCategory.rejected, ({ products }, action) => {
      products.isLoading = false;
      products.error = action.payload;
      products.data = [];
    });

    // POPULAR PRODUCTS

    builder.addCase(fetchPopularProducts.pending, ({ popularProducts }) => {
      popularProducts.isLoading = true;
    });
    builder.addCase(
      fetchPopularProducts.fulfilled,
      ({ popularProducts }, action) => {
        popularProducts.isLoading = false;
        popularProducts.data = action.payload.results;
      }
    );

    // NEW PRODUCTS

    builder.addCase(fetchNewProducts.pending, ({ newProducts }) => {
      newProducts.isLoading = true;
    });
    builder.addCase(fetchNewProducts.fulfilled, ({ newProducts }, action) => {
      newProducts.isLoading = false;
      newProducts.data = action.payload.results;
    });
  },
});

export default productsSlice.reducer;
