import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "menu",
  initialState: {
    showMenu: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
    closeMenu: (state) => {
      state.showMenu = false;
    },
    openMenu : (state) => {
        state.showMenu = true;
    }
  },
});

export const { toggleMenu ,closeMenu,openMenu} = appSlice.actions;
export default appSlice.reducer;
