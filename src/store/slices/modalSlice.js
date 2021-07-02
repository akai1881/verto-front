import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    open: false,
    categoryIndex: null,
    subCategoryIndex: null,
    isCategoryOpen: false,
    isSubCategoryOpen: false,
  },
  reducers: {
    setModalVisible: (state) => {
      state.open = !state.open;
    },
    setCategory: (state, action) => {
      state.categoryIndex = action.payload;
    },
    setSubCategory: (state, action) => {
      state.subCategoryIndex = action.payload;
    },
    setCategoryClick: (state, action) => {
      state.isCategoryOpen = action.payload;
    },
    setSubCategoryClick: (state, action) => {
      state.isSubCategoryOpen = action.payload;
    },
  },
});

export const {
  setModalVisible,
  setCategory,
  setSubCategory,
  setSubCategoryClick,
  setCategoryClick,
} = modalSlice.actions;

export default modalSlice.reducer;
