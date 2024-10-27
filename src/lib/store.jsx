import { configureStore } from "@reduxjs/toolkit";

import accountSlice from "./features/account";

export const accountStore = () => {
  return configureStore({
    reducer: {
      account: accountSlice,
    },
  });
};
