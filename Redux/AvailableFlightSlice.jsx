import { createSlice } from "@reduxjs/toolkit";

const AvailableFlightSlice = createSlice({
    name:"availableFlight",
    initialState : {
        flights : [],
    },
    reducers : {
        addItem : (state,action) => {
            state.flights.push(action.payload);
        }
    }
})

export default AvailableFlightSlice.reducer ;
export const {addItem} = AvailableFlightSlice.actions