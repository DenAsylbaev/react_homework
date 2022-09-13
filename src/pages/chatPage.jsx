import React from "react";
import MessageFunc from '../components/messages';
import MessagesList from '../components/messagesList'
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Chat() {
    const { id } = useParams();
    const { chatList } = useSelector((state) => state.chatsReducer);
    const post = chatList.find((el) => el.id === id);

    if (!id || !post) {
        return <Redirect to="/chats" />;
        }
            
    return (
        <div className="App">
            {post && (
                <h3>{post.title}</h3>
            )}
            <header className="App-header">
                <MessageFunc 
                    post = { post }
                    renderMessageList = { (messageList) => {
                        return <MessagesList 
                                messageList={ messageList }
                                post={ post }
                                />
                    } }/>
            </header>
        </div>
    )
}