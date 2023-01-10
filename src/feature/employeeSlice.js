import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name: "employee",
    // initialState: {
    //     employees: null,
    // },
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            // addEmployee: (state, { payload }) => {
            //     state.employees.push(payload)
            // }


            const employee = {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                dateOfBirth: action.payload.dateOfBirth,
                startDate: action.payload.startDate,
                street: action.payload.street,
                city: action.payload.city,
                state: action.payload.state,
                zipCode: action.payload.zipCode,
                department: action.payload.department,
            };
            state.push(employee);
        },
    },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
