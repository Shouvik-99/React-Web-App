import { configureStore } from "@reduxjs/toolkit"
import foodItemsSlice from './FoodItemsSlice'

const store = configureStore({
    reducer: {
        items: foodItemsSlice.reducer
    }
})

export default store;