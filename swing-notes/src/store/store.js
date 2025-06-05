import { configureStore } from "@reduxjs/toolkit";
import notesReducers from "../reducers/notesReducer";

const store = configureStore({
  reducer: {
    swingNotes: notesReducers,
  },
});

export default store;
