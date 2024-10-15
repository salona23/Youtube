import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../utils/appSlice";
import searchReducer from "../utils/searchSlice";
import chatReducer from "../utils/chatSlice"

const store = configureStore({
    reducer : {
        menu: menuReducer,
        search : searchReducer,
        chat : chatReducer,
    }
});

export default store;