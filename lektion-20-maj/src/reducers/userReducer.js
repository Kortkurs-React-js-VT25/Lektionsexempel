import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUsername(state, action) {
      console.log("Current state: ", state);
      console.log("Action: ", action);
      state.username = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { updateUsername, updateEmail } = userReducer.actions;

export default userReducer.reducer;
