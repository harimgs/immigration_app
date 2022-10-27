import { createSlice } from '@reduxjs/toolkit';

let items = createSlice({
  name: 'items',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    addCounter(state, action) {
      let i = [...state].findIndex((x) => x.id === action.payload.id);
      state[i].count++;
    },
    // addItem(state, action) {
    //   let copy = [...state, action.payload];
    //   state = copy;
    // },
    addItem(state, action) {
      let i = [...state].findIndex((x) => x.id === action.payload.id);
      if (i === -1) {
        state.push(action.payload);
      } else {
        state[i].count++;
      }
    },
    delCounter(state, action) {
      let i = [...state].findIndex((x) => x.id === action.payload.id);
      if (state[i].count > 1) {
        state[i].count--;
      } else {
        state.splice(i,1);
      }
    },
  },
});
export let { addCounter, delCounter, addItem } = items.actions;

export default items;
