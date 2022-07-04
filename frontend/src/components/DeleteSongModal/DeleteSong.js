import React from 'react';

import './DeleteSong.css';

import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as songsReducer from "../../store/songsReducer";

function DeleteSong({sessionUser, setShowModal, song}) {
    const dispatch = useDispatch();
    const history = useHistory();


    const handleClick = async(e) => {
        const deleted = await dispatch(songsReducer.removeSong(song));

        if (deleted) {
        setShowModal(false);

        return history.push('/');
        };
    };
  
    if (!sessionUser) return <Redirect to="/splash" />;
  
    return (
        <div className='modal'>
            <div className='confirm_del'>
                <h3>
                    Are you sure you want to delete your song?
                </h3>
                <button onClick={(e)=> handleClick(e)}>Confirm</button>
            </div>
        </div>
    )
}

export default DeleteSong;