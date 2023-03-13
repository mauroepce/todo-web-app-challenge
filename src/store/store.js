import { configureStore } from "@reduxjs/toolkit";
import  to_do_slice  from "reducer/reducer";

export const store = configureStore({
    reducer: {
        global_state: to_do_slice
    }
})