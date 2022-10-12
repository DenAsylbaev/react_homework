import { ADD_CHAT } from './constants';
import { DELETE_CHAT } from './constants';


const initialState = {
    chatList: []
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
                return {
                    ...state,
                    chatList: action.payload
                };
        case DELETE_CHAT:
            const index = state.chatList.findIndex(n => n.id === action.payload);
            if (index !== -1) {
                state.chatList.splice(index, 1);
            }
            return {
                ...state,
                chatList: state.chatList
            }
        default:
            return state
    }
}