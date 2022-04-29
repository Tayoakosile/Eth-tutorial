import { configureStore } from "@reduxjs/toolkit";
import walletAddressSlice from "./walletInfo";
import isAnswerCheckedSlice from "./isAnswerChecked";
import userTotalScoreSlice from "./totalScores";
// ...
const store = configureStore({
  reducer: {
    walletAddress: walletAddressSlice,
    userTotalScore: userTotalScoreSlice,
    isAnswerChecked: isAnswerCheckedSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
