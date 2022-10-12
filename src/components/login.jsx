import React from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase-config';
import { useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const auth = getAuth(app);
export const LoginComp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [authed, setAuthed] = useState(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            setError(errorCode);
        });
    }

    const logOut = async () => {
        await signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setAuthed(false);
              }
            else {
                setAuthed(true);
            }
        })
    }, [])

    return !authed
    ? (
        <div className="App">
            <p>You are in system</p>
            <button onClick={ logOut }>LogOut</button>
        </div>
        ) 
    : (

        <div className="App">
            <form onSubmit={handleSubmit}>
                <p>Please login to your account</p>
                <div>
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        name="password"
                        onChange={handlePassChange}
                        value={password}
                        type="password"
                    />
                </div>
                <div>
                    {error && <p>{error}</p>}
                    <button type="submit">Login</button>
                </div>
                <hr />
                <p>
                    Don't have an account? <Link to="/registration">Registrate</Link>
                </p>
            </form> 
        </div>
    )
}