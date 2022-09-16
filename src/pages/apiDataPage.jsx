import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllGists } from '../store/api/constants'
import { CircularProgress } from '@mui/material';

const selectGists = (state) => state.gistsReducer.gists;
const selectGistsLoading = (state) => state.gistsReducer.loading;

export default function ApiData() { 
    const gists = useSelector(selectGists);
    const loading = useSelector(selectGistsLoading);
    const dispatch = useDispatch();
    const requestGists = () => {
        dispatch(getAllGists());
    }

    useEffect(() => {
        requestGists();
        }, [requestGists]);

        if (loading) {
            return <CircularProgress />;
            }

        return (
            <>

                { gists.map((el) => (
                    <div className="api_flex">
                        <div key={`div_${el.id}`}>
                                <li > { el.description } </li> 
                        </div>
                        <div key={`div_2_${el.id}`}>
                            <li > { el.id } </li> 
                        </div>
                    </div>
                ))}

                <div className="Retry_btn">
                    <button onClick={requestGists}>Retry</button>
                </div>

            </>

        )
}
