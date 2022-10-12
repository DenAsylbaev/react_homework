import { GET_GISTS_REQUEST } from './constants';
import { GET_GISTS_SUCCESS } from './constants';
import { GET_GISTS_FAILURE } from './constants';
import { STATUSES } from './constants';

const initialState = {
    gists: [],
    request: STATUSES.IDLE,
    error: null,
    };


// export default const gistsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }

export const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
            ...state,
                request: STATUSES.REQUEST,
            };
        case GET_GISTS_SUCCESS:
            return {
            ...state,
            gists: action.payload,
                request: STATUSES.SUCCESS,
            };
        case GET_GISTS_FAILURE:
            return {
            ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
            };
        default:
        return state;
    }
    };