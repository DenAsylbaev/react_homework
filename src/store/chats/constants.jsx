export const ADD_CHAT ="ADD_CHATS";
export const addChat = (newChatName, chat) => ({
    type: ADD_CHAT, 
    payload: newChatName,
})

export const DELETE_CHAT ="DELETE_CHAT";
export const deleteChat = (id) => ({
    type: DELETE_CHAT, 
    payload: id
})