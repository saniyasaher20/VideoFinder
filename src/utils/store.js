import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

//Creating a store
const store = configureStore({
    reducer: {
        app: appSlice
    }
});

export default store;