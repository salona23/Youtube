import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../utils/appSlice";

const store = configureStore({
    reducer : {
        menu: menuReducer,
    }
});

export default store;