import { createSlice } from "@reduxjs/toolkit";

const userTotalScore = createSlice({
  initialState: {
    value: {
      score:0,
    },
  },
  name: "userTotalScore",
  reducers: {
    updateTotalScore: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateTotalScore } = userTotalScore.actions;
export default userTotalScore.reducer;
