import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TextField from '@mui/material/TextField';
import ChatsArray from './chatsArray'

let timer;
let setTextFocus;

export default function MessageListFunc() {
    const [messageList, setMessageList] = useState([]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const sendMessage = () => {
        setMessageList((prev) => ([...prev,
            {
                text: text,
                author: author 
            }
        ]))

        setText('');
        setAuthor('');

        setTextFocus = (input) => input && input.focus();
    }

    useEffect(() => {
        if (messageList[messageList.length-1]?.author === 'user') {
            clearTimeout(timer);
            timer = setTimeout(() => {
                setMessageList((prev) => ([...prev,
                    {
                        text: 'Your request has been accepted',
                        author: 'bot' 
                    }
                ]))   
            }, 1500)
        }
        // clearTimeout();
        return () => { clearTimeout(timer); }
    }, [messageList]);

    return (
        <>
            <ChatsArray messageList={messageList}/>
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

                    <button className='btn' onClick={sendMessage}>SUBMIT</button>
                </div>
                <div className="message_box">
                    {
                        messageList.map((el, index) => {
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