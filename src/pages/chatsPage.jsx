import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { addChat } from '../store/chats/constants';
import { deleteChat } from '../store/chats/constants';
import '../css/style.css'


export default function Chats() {
    const dispatch = useDispatch();
    const [newChatName, setNewChatName] = useState('');

    const { chatList } = useSelector((state) => state.chatsReducer);
    const createChat = useCallback(() => {
        dispatch(addChat(newChatName))
        }, [dispatch, newChatName]);

    const handleChange = (e) => {
        setNewChatName(e.target.value);
        }

    return (
        <div className="App">
            <h3>Chat list</h3>
            {
                chatList.map((el) => (
                    <div key={`div_${el.id}`} className="chat_list_item">
                        <Link key={el.id} to={`/chats/${el.id}`}>
                            <li key={`li_${el.id}`}>Chat name: { el.title }</li> 
                        </Link>
                        <button 
                            key={`btn_${el.id}`} 
                            onClick={() => dispatch(deleteChat(el.id))}>
                                DELETE CHAT
                        </button>
                    </div>
                ))
            }            
            <div className="chat_create">
                <h4>Create a new chat</h4>
                <input placeholder="input new chat name" type="text" value={ newChatName } onChange={ handleChange }/>
                <button onClick={ createChat }>CREATE CHAT</button>
            </div>
        </div>
        
    )
}