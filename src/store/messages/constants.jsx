export const SAVE_MESSAGES ="SAVE_MESSAGES";

export const saveMessage = (messageList, postId) => ({
    type: SAVE_MESSAGES, 
    payload: messageList,
    postId
})

export const saveMessageWithThunk = (messageList, postId) => (dispatch, getState) => {
    dispatch(saveMessage(messageList, postId));

    if (messageList.author === 'user') {
        const botMessage = {
            text: 'Your request has been accepted',
            author: 'bot' 
        };
        setTimeout(() => dispatch(saveMessage(botMessage, postId)), 2000);
    }
}