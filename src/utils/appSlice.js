import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true //sets menu open by default
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen //if isMenuOpen=true, then set it false and vice-versa
        }
    }
})

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;