import { createSlice } from '@reduxjs/toolkit';

let users = createSlice({
  name: 'users',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'park';
    },
    increaseAge(state) {
      state.age += 1;
    },
  },
});
export let { changeName, increaseAge } = users.actions;

export default users;