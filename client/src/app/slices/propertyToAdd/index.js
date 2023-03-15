import { createSlice } from "@reduxjs/toolkit";

export const propertyToAdd = createSlice({
  name: "propertyToAdd",

  initialState: {
    type: "",
    roomType: "",
    location: "",
    travellers: 0,
    rooms: 0,
    beds: 0,
    bathrooms: 0,
    services: [],
    images: [],
    title: "",
    description: "",
    price: 0,
  },

  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setType } = propertyToAdd.actions;


