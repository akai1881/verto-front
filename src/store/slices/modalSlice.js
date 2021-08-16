import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    open: false,
    categoryIndex: null,
    subCategoryIndex: null,
    isCategoryOpen: false,
    isSubCategoryOpen: false,
    isMobile: false,
    optionsDialog: {
      open: false,
      content: null,
    },
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
    setMobile: (state, action) => {
      state.isMobile = action.payload;
    },
    setOpenOptionDialog: (state, action) => {
      state.optionsDialog.open = action.payload.open;
      state.optionsDialog.content = action.payload.content;
    },
    setCloseOptionsDialog: (state, action) => {
      state.optionsDialog.open = false;
      state.optionsDialog.content = null;
    },
    clearModalState: (state) => {
      state.isCategoryOpen = false;
      state.isSubCategoryOpen = false;
      state.categoryIndex = null;
      state.subCategoryIndex = null;
    },
  },
});

export const {
  setModalVisible,
  setCategory,
  setMobile,
  setSubCategory,
  setOpenOptionDialog,
  setSubCategoryClick,
  setCategoryClick,
  setCloseOptionsDialog,
  clearModalState,
} = modalSlice.actions;

export default modalSlice.reducer;
