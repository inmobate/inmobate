import { createSlice } from "@reduxjs/toolkit";

export const filterCombine = createSlice({
  name: "filterCombine",

  initialState: {
    filter: [],
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterCombine.actions;
