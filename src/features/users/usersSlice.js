import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { id: 0, name: "Dwight schrute" },
    { id: 1, name: "Micheal Scott" },
    { id: 2, name: "Jim Halpert" },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.data.push(action.payload);
    },
  },
});

export default usersSlice.reducer;
