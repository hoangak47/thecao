import { configureStore } from "@reduxjs/toolkit";

import accountSlice from "./features/account";
import postsSlice from "./features/posts";

export const accountStore = () => {
  return configureStore({
    reducer: {
      account: accountSlice,
      posts: postsSlice,
    },
  });
};
