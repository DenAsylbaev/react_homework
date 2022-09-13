export const SAVE_MESSAGES ="SAVE_MESSAGES";
export const saveMessage = (messageList, postId) => ({
    type: SAVE_MESSAGES, 
    payload: messageList,
    postId
})