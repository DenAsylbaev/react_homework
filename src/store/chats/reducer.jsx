import { UPDATE_CHAT } from './constants';

const initialState = {
    chatList: []
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CHAT:
                return {
                    ...state,
                    chatList: action.payload
                };
        default:
            return state
    }
}