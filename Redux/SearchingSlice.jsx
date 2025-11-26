import { createSlice } from "@reduxjs/toolkit"
const SearchingSlice = createSlice({
    name : "searching" ,
    initialState: {
        depature: "",
        destination : ""
    },
    reducers: {
        addDepature : (state,action) => {
            state.depature = action.payload;
        },
        addDestination : (state,action) => {
            state.destination = action.payload;
        }
    }
})

export default SearchingSlice.reducer;
export const {addDepature ,addDestination} = SearchingSlice.actions;