import { configureStore, createSlice } from "@reduxjs/toolkit"
const foodItems = [{
    itemName: "",
    itemType: "",
    price: 0
}]
const foodItemsSlice = createSlice({
    name: "foodItems",
    initialState: foodItems,
    reducers: {
        getAllItems: (state, action) => {
            foodItems = action.payload
        },
        addNewFooditem: (state, action) => {

        },
        deleteFoodItem: (state, action) => {

        }
    }

})

const foodItemStore = configureStore({
    reducer: {
        foodItems: foodItemsSlice.reducer
    }
})

export const foodItemsActions = foodItemsSlice.actions
export default foodItemStore;