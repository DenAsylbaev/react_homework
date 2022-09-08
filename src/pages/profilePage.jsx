import React from "react";

import { NAME_CONTROL } from './store/constants';
import { useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";


export default function Profile() {

    const { showName, name } = useSelector((state) => state);
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch({ type: NAME_CONTROL });
    }, [dispatch]);
        
    return (
        <div className="App">
            <h4>Profile</h4>
            <input
                type="checkbox"
                onChange={setShowName}
            />
            <span>Show Name</span>
            {showName && <div>{name}</div>}
        </div>

    )
}