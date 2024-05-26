import { createAction, createSlice } from "@reduxjs/toolkit";

const totalItemCountSlice = createSlice({
  name: "totalItemCountSlice",
  initialState: { countItems: 0 },
  reducers: {
    addItems: (state) => {
      state.countItems++;
    },
    deleteItems: (state) => {
      state.countItems--;
    },
  },
});

export default totalItemCountSlice;
export const totalItemCountAction = totalItemCountSlice.actions;
