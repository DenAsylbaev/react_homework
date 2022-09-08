import React from "react";

import { Link } from 'react-router-dom';

export default function Chats({chats}) {

    return (
        <div className="App">
            <h3>Please select chat</h3>
            {
                chats.map((el) => (
                    <Link key={el.id} to={`/chats/${el.id}`}>
                        <li>{ el.title }</li> 
                    </Link>
                ))
            }
        </div>
        
    )
}