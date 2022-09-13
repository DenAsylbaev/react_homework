// import { NAME_CONTROL } from './constants';
import { SAVE_MESSAGES } from './constants';

const initialState = {
        newMessageList: {}
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_MESSAGES:
                return {
                    ...state,
                    newMessageList: {
                        // ...state.newMessageList,
                            [action.postId]: 
                                action.payload
                    }
                }
        default:
            return state
    }
}