import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazaarSlice = createSlice({
  name: 'bazaar',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload._id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter((item) => item._id !== action.payload);
    },
    resetCart: (state) => {
      state.productData = [];
    },
    increamentQuantity: (state, action) => {
      const item = state.productData.find((item) => item._id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decreamentQuantity: (state, action) => {
      const item = state.productData.find((item) => item._id === action.payload);
      if (item) {
        item.quantity--;
      }
    },
    // =======User Start Here======
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    // =====================//
  },
});

export const { addToCart, resetCart, decreamentQuantity, increamentQuantity, deleteItem, addUser, removeUser } =
  bazaarSlice.actions;

export default bazaarSlice.reducer;
