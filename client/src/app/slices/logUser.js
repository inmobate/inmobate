import { createSlice } from "@reduxjs/toolkit";

export const filterCombine = createSlice({
  name: "logUser",

  initialState: {
    user: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = filterCombine.actions;
