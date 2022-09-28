import React from 'react';

import './DeletePlaylist.css';

import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as playlistsReducer from "../../store/playlistsReducer";

function DeletePlaylist({sessionUser, setShowModal, playlist}) {
    const dispatch = useDispatch();
    const history = useHistory();


    const handleClick = async(e) => {
        const deleted = await dispatch(playlistsReducer.removePlaylist(playlist));

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
                    Are you sure you want to delete your playlist?
                </h3>
                <button onClick={(e)=> handleClick(e)}>Confirm</button>
            </div>
        </div>
    )
}

export default DeletePlaylist;