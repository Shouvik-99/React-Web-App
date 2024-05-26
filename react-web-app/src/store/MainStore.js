import { configureStore } from "@reduxjs/toolkit";
import foodItemsSlice from "./FoodItemsSlice";
import totalItemCountSlice from "./TotalItemCountSlice";

const store = configureStore({
  reducer: {
    items: foodItemsSlice.reducer,
    totalSelectedItemsCount: totalItemCountSlice.reducer,
  },
});

export default store;
