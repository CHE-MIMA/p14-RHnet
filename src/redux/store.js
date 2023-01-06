import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './employeeReducer'
export default configureStore({
    reducer: {
        employeeReducer,

    },
})