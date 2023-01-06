
import { ADD } from "./employeeAction";



const initialState = {
    // employee: {},



};
export default function employeeReducer(state = initialState, action) {
    switch (action.type) {
        // Login user
        case ADD:
            return {
                employee: action.payload.employee
            }

        default:
            return state;
    }
}