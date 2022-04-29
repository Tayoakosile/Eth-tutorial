import { createSlice } from "@reduxjs/toolkit";

// SIgn up info about user
const walletAddressSlice = createSlice({
  initialState: {
    value: {
      walletAddress: "",
      isWalletConnected: false,
      isWalletConnecting: false,
    },
  },
  name: "walletAddress",
  reducers: {
    addWalletAddress: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addWalletAddress } = walletAddressSlice.actions;
export default walletAddressSlice.reducer;
