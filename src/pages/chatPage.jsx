import React from "react";
import MessageListFunc from '../components/messageListFunc';
import ChatsArray from '../components/chatsArray'
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default function Chat({ chats }) {

    const { id } = useParams();

    const post = chats.find((el) => el.id === +id);

    if (!id || !post) {
        return <Redirect to="/chats" />;
        }
            
    return (
        <div className="App">
            {post && (
                <h3>{post.title}</h3>
            )}
            <header className="App-header">
                <MessageListFunc 
                    renderMessageList = { (messageList) => {
                        return <ChatsArray messageList={messageList}/>
                    } }/>
            </header>
        </div>
    )
}