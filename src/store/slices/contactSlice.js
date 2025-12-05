import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  contacts: [
    {
      id: uuidv4(),
      isFavourite: false,
      fullName: "John Doe",
      phoneNumber: "+1234567890",
    },
    {
      id: uuidv4(),
      isFavourite: false,
      fullName: "Jane Smith",
      phoneNumber: "+0987654321",
    },
  ],
};

const contactSlice = createSlice({
  initialState,
  name: "contacts",
  reducers: {
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter((c) => c.id !== payload);
    },
    updateContact: (state, { payload: { id, data } }) => {
      const contactIndex = state.contacts.findIndex((c) => c.id === id);
      state.contacts[contactIndex] = {
        ...state.contacts[contactIndex],
        ...data,
      };
    },
    addContact: (state, { payload }) => {
      console.log("state, payload :>> ", state, payload);
      state.contacts.push({ ...payload, isFavourite: false, id: uuidv4() });
    },
  },
});

export const { reducer, actions } = contactSlice;
export const { deleteContact, updateContact, addContact } = actions;
export default reducer;
