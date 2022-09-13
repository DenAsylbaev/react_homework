// import { NAME_CONTROL } from './constants';
import { SAVE_MESSAGES } from './constants';

const initialState = {
        newMessageList: {}
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_MESSAGES:
            const currentList = state.newMessageList[action.postId] || [];
                return {
                    ...state,
                    newMessageList: {
                        ...state.newMessageList,
                            [action.postId]: [
                                ...currentList, {
                                ...action.payload
                                }
                            ]
                    }
                }
        default:
            return state
    }
}