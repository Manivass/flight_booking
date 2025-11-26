import {configureStore} from "@reduxjs/toolkit";
import SearchingReducer from "./SearchingSlice";
import AvailableFlightReducer from "./AvailableFlightSlice";

const Store = configureStore({
    reducer : {
        searching : SearchingReducer,
        availableFlight : AvailableFlightReducer,
    }
})
export default Store ;