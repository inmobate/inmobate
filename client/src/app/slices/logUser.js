import { createSlice } from "@reduxjs/toolkit";

export const logUser = createSlice({
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

export const { setUser } = logUser.actions;
