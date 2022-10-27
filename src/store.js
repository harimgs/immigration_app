import { configureStore, createSlice } from '@reduxjs/toolkit';
import users from './store/usersSlice.js';
import items from './store/itemsSlice.js';


export default configureStore({
  reducer: { items: items.reducer, users: users.reducer },
});
