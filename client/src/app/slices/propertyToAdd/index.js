import { createSlice } from "@reduxjs/toolkit";

export const propertyToAdd = createSlice({
  name: "propertyToAdd",

  initialState: {
    type: "",
    roomType: "",
    location: {},
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
    setTypeRoom: (state, action) => {
      state.roomType = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setTravellers: (state, action) => {
      state.travellers = action.payload;
    },
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setBeds: (state, action) => {
      state.beds = action.payload;
    },
    setBathrooms: (state, action) => {
      state.bathrooms = action.payload;
    },
    setServices: (state, action) => {
      state.services = action.payload;
    },
  },
});

export const {
  setType,
  setTypeRoom,
  setLocation,
  setTravellers,
  setRooms,
  setBeds,
  setBathrooms,
  setServices
} = propertyToAdd.actions;
