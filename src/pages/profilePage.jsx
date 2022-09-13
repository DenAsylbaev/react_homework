import React, { useState } from "react";
import { NAME_CONTROL } from '../store/profile/constants';
import { changeName } from '../store/profile/constants';
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";


export default function Profile() {

    const [ value, setValue ] = useState(''); 
    const { showName, name } = useSelector((state) => state.showNameReducer);
    const dispatch = useDispatch();
    const setShowName = useCallback(() => {
        dispatch({ type: NAME_CONTROL });
    }, [dispatch]);

    const handleChange = (e) => {
        setValue(e.target.value);
        }

    const setName = useCallback(() => {
        dispatch(changeName(value))
        }, [dispatch, value]);
        
    return (
        <div className="App">
            <h4>Profile</h4>
            <input
                type="checkbox"
                onChange={setShowName}
            />
            <span>Show Name</span>
            {showName && <div>{name}</div>}

            <input type="text" value={ value } onChange={ handleChange }/>
            <button onClick={ setName }>Set name</button>
        </div>

    )
}