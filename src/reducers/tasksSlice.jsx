import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [], auth: { isAuthenticated: false } },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((_, index) => index !== action.payload);
    },
    authenticate: (state) => {
      state.auth.isAuthenticated = true;
    },
    logout: (state) => {
      state.auth.isAuthenticated = false;
      state.tasks = [];
    },
  },
});

export const { addTask, deleteTask, authenticate, logout } = tasksSlice.actions;
export default tasksSlice.reducer;