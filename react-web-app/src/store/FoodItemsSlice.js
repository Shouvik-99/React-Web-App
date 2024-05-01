import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchFoodItems = createAsyncThunk('fetchFoodItems/fetchAllItems', async () => {
    const res = fetch("http://localhost:8080/api/v1/foods").then(res => {
        return res.json()
    })
    // const rsp = fetch("http://localhost:5173/https://react-backend-production-e284.up.railway.app/api/v1/foods", {
    //     method: "GET",
    //     // headers: {
    //     //     "Content-Type": "application/json",
    //     //     "Access-Control-Allow-Origin": "*",
    //     //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    //     // }
    // })
    //     .then((response) => {
    //         const reader = response.body.getReader();
    //         // read() returns a promise that resolves when a value has been received
    //         reader.read().then(function pump({ done, value }) {
    //             if (done) {
    //                 // Do something with last chunk of data then exit reader
    //                 return value;
    //             }
    //             // Otherwise do something here to process current chunk

    //             // Read some more, and call this function again
    //             console.log("what=======> " + value)
    //             return reader.read().then(pump);
    //         });
    //     })
    //     .catch((err) => console.error(err));
    // console.log(rsp);
    // return rsp;
    return res;
}
)
const foodItemsObj = {
    foodItems: []
};
const foodItemsSlice = createSlice({
    name: "foodItemsSlice",
    initialState: foodItemsObj,
    reducers: {
        addNewFooditem: (state, action) => {
        },
        deleteFoodItem: (state, action) => {
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFoodItems.fulfilled, (state, action) => {
            console.log("Promise success")
            state.foodItems = action.payload
        })
            .addCase(fetchFoodItems.pending, (state, action) => {
                console.log("Promise pending")
            })
            .addCase(fetchFoodItems.rejected, (state, action) => {
                console.log("Promise rejected")
            })
    }

})

export default foodItemsSlice
export const foodItemsActions = foodItemsSlice.actions