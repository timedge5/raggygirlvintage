import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/data";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

// export RootState type for use in slices
export type RootState = ReturnType<typeof store.getState>;
