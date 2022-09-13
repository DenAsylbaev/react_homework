import { NAME_CONTROL } from './constants';
import { CHANGE_NAME } from './constants';


const initialState = {
        showName: false,
        name: ''
}

export const showNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAME_CONTROL:
            return {
                ...state,
                showName: !state.showName
            }
        case CHANGE_NAME:
                return {
                ...state,
                name: action.payload
}
        default:
            return state
    }
}