import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    removeUser(state, { payload }) {
      state.user = payload;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
