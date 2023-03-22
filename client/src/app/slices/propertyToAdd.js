import { createSlice } from "@reduxjs/toolkit";

const structure = {
  propertyToAdd: {
    type: "",
    roomType: "",
    location: {},
    travellers: 1,
    rooms: 1,
    beds: 1,
    bathrooms: 1,
    services: [],
    image: "",
    title: "",
    description: "",
    price: 1000,
  },
};

if (!localStorage.getItem("persist:root")) {
  localStorage.setItem("persist:root", JSON.stringify(structure));
}

const storageJson = JSON.parse(
  localStorage.getItem("persist:root")
).propertyToAdd;

const storage = JSON.parse(storageJson);

export const propertyToAdd = createSlice({
  name: "propertyToAdd",

  initialState: {
    type: storage.type,
    roomType: storage.roomType,
    location: storage.location,
    travellers: storage.travellers,
    rooms: storage.rooms,
    beds: storage.beds,
    bathrooms: storage.bathrooms,
    services: storage.services,
    images: storage.images,
    title: storage.title,
    description: storage.description,
    price: storage.price,
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
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setImage: (state, action) => {
      state.images = action.payload;
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
  setServices,
  setDescription,
  setTitle,
  setPrice,
  setImage,
} = propertyToAdd.actions;
