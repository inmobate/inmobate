import {
  setType,
  setTypeRoom,
  setLocation,
  setTravellers,
  setRooms,
  setBeds,
  setBathrooms,
  setServices,
} from "./index";

export const setTypeAction = (type) => (dispatch) => {
  dispatch(setType(type));
};

export const setTypeRoomAction = (typeRoom) => (dispatch) => {
  dispatch(setTypeRoom(typeRoom));
};

export const setLocationAction = (location) => (dispatch) => {
  dispatch(setLocation(location));
};

export const setTravellersAction = (travellers) => (dispatch) => {
  dispatch(setTravellers(travellers));
};

export const setRoomsAction = (rooms) => (dispatch) => {
  dispatch(setRooms(rooms));
};

export const setBedsAction = (beds) => (dispatch) => {
  dispatch(setBeds(beds));
};

export const setBathroomsAction = (bathrooms) => (dispatch) => {
  dispatch(setBathrooms(bathrooms));
};

export const setServicesAction = (services) => (dispatch) => {
  dispatch(setServices(services));
};
