import {createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({

    name : "search",
    initialState : {},

    reducers : {
        addSearchResults : (state,action) =>{
            // state =  Object.assign(state,action.payload);
            return {...state, ...action.payload};
        }
    }
});

export const {addSearchResults} = searchSlice.actions;
export default searchSlice.reducer;