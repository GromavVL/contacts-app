import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./slices/contactSlice.js";

const store = configureStore({
  reducer: {
    contactsList: contactsReducer,
  },
});


export default store;