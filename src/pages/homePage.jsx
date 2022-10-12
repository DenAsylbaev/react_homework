import React from "react";
import { Link } from 'react-router-dom';


export default function Home() {    
    return (
        <div className="App">
            <h3>Home</h3>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/registration">Registration</Link>
            </div>
        </div>
    )
}