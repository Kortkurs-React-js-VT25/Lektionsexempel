import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  username: "",
};

const notesReducers = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes(state, action) {
      state.notes = action.payload;
    },
    updateUsername(state, action) {
      state.username = action.payload;
    },
  },
});

export const { addNotes, updateUsername } = notesReducers.actions;

export default notesReducers.reducer;
