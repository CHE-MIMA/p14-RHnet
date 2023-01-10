import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../feature/employeeSlice"
const store = configureStore({
    reducer: {
        employee: employeeReducer,
    },
});
export default store;