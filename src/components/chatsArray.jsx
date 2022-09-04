import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ChatIcon from '@mui/icons-material/Chat';

export default function ChatsArray({ messageList }) {

    const chatArr = (messageList.map(((item, index) => ({...item, id: index}))));

    return (
        <List
            sx={{
                color:'#000',
                border: '1px solid black',
                borderRadius: '5px',
                width: '50%',
                maxWidth: '400px'
            }}
        >
            <h3>Chats list</h3>
            { chatArr.map(item => (
                <ListItem key={item.id}>
                    <ChatIcon/>
                    <ListItemText primary= { item.id } 
                    sx ={{
                        paddingLeft: '15px'
                    }}/>
                    <ListItemText primary= { item.author } />
                </ListItem>
            ))}
        </List>
    )
}
