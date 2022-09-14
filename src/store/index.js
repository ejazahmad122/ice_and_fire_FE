import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";
import bookSlice from "./bookSlice";

const store = configureStore({
    reducer:{
        book : bookSlice.reducer,
        account: accountSlice.reducer
    }
})

export default store
