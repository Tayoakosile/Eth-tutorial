import { createSlice } from "@reduxjs/toolkit";

const isAnswerChecked = createSlice({
  initialState: {
    value: {
      id: "",
    },
  },
  name: "isAnswerChecked",
  reducers: {
    answerUserChecked: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { answerUserChecked } = isAnswerChecked.actions;
export default isAnswerChecked.reducer;
