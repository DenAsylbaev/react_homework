import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TextField from '@mui/material/TextField';
import { addMessageWithFirebase, initMessagesTracking } from "../store/messages/constants";

import { useSelector, useDispatch } from "react-redux";

let setTextFocus;

export default function MessageFunc({ renderMessageList, post }) {
    const [messageList, setMessageList] = useState([]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const { newMessageList } = useSelector((state) => state.messagesReducer);
    const postId = post.id;
    const dispatch = useDispatch();

    const sendMessage = () => {
        setMessageList(() => (
            {
                text: text,
                author: author 
            }
        ))

        setText('');
        setAuthor('');
        setTextFocus = (input) => input && input.focus();
    }

    useEffect(() => {
        messageList.length !==0 &&
        dispatch(addMessageWithFirebase(messageList, postId, Date.now()));
    }, [messageList, postId, dispatch]);

    useEffect(() => {
        dispatch(initMessagesTracking(postId));
    }, [dispatch, postId]);


    return (
        <>
            { renderMessageList(newMessageList) }
            <div className="message_list_wrap">
                <div className="input_form">
                    <TextField id="" 
                        label="Name"
                        variant="filled" 
                        color='secondary'
                        onChange={(e) => {setAuthor(e.target.value)}}
                        required
                        fullWidth
                        value={ author }
                    />
                    <TextField id="" 
                        label="Message" 
                        variant="filled" 
                        color='secondary'
                        onChange={(e) => {setText(e.target.value)}}
                        required
                        fullWidth
                        multiline
                        rows={4}
                        value={ text }
                        autoFocus={true}
                        inputRef={setTextFocus}
                    />

                    <button className='btn' onClick={ sendMessage }>SUBMIT</button>
                </div>
                <div className="message_box">
                    {
                       newMessageList &&
                       newMessageList.map((el, index) => {
                            return (
                                <ul key={index} className={ el.author === 'bot' ? 'bot_message' : 'user_message'}>
                                    <li className="author">author: { el.author }</li>
                                    <li className="text">message: { el.text }</li>
                                </ul>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </>
    )
}