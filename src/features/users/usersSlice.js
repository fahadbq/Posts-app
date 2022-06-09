import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { id: 0, name: "Joey" },
    { id: 1, name: "Rachel" },
    { id: 2, name: "Pheobe" },
    { id: 3, name: "Monica" },
    { id: 4, name: "Ross" },
    { id: 5, name: "Chandler" },
    { id: 6, name: "Micheal Scott" },
    { id: 7, name: "Dwight Shcrute" },
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
