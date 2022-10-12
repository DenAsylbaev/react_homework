import { db } from '../../firebase-config';
import { ref, update, onValue } from "firebase/database";

export const SAVE_MESSAGES ="SAVE_MESSAGES";

export const addMesWithFirebase  = (messageList, chatId, id) => () => {
    update(ref(db, 'chats/' + chatId + '/messages/' + id), {
        message: messageList
      });
}

export const addMessageWithFirebase  = (messageList, chatId, id) => (dispatch) => {
    dispatch(addMesWithFirebase(messageList, chatId, id));
      
    if (messageList.author === 'user') {
            const botMessageList = {
                text: 'Your request has been accepted',
                author: 'bot' 
            };
            setTimeout(() => dispatch(addMesWithFirebase(botMessageList, chatId, `${id}_b`)), 3000);
    };
};

const getPayloadFromSnapshot = (snapshot) => {
    const messages = [];
    snapshot.forEach((mes) => {
        messages.push(mes.val());
    });
    return messages
}


export const initMessagesTracking = (chatId) => (dispatch) => {
    const starCountRef = ref(db, 'chats/' + chatId + '/messages/');
    onValue(starCountRef, (snapshot) => {

        const data = getPayloadFromSnapshot(snapshot);
        let arr = [];
        data.map(el => {
            arr = [...arr, ...Object.values(el)]
        });
        dispatch({
            type: SAVE_MESSAGES,
            payload: arr
        });
    });
}