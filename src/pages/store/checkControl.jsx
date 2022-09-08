import { NAME_CONTROL} from './constants'

const initialState = {
    showName: false,
    name: 'DENIS ASYLBAEV'
    }

export const nameCheck = (state = initialState, action) => {
    switch (action.type) {
        case NAME_CONTROL:
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}

// export const nameCheck = (state, action) => {
//     switch (action.type) {
//         case NAME_CONTROL:
//             // return {...state, 'NEW'};
//         default:
//             return state;
//     }
// }