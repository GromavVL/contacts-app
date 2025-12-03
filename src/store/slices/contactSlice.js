import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  contacts: [
    {
      id: uuidv4(),
      fullName: "John Doe",
      phoneNumber: "+1234567890",
    },
    {
      id: uuidv4(),
      fullName: "Jane Smith",
      phoneNumber: "+0987654321",
    },
  ],
};

const contactSlice = createSlice({
  initialState,
  name: "contacts",
  reducers: {},
});

export const { reducer, actions } = contactSlice;
export default reducer;
