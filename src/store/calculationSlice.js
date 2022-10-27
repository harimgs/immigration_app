import { createSlice } from "@reduxjs/toolkit";

let calculation = createSlice({
  name: "calculation",
  initialState: { score: 0 },
  reducers: {
    addScore(state, action) {
      let copy = state.score;

      copy = state.score + action.payload.score;

      state.score = copy;
    },
  },
});
export let { addScore } = calculation.actions;

export default calculation;
