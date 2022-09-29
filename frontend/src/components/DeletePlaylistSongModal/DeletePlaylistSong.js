import React from 'react';

import './DeletePlaylistSong.css';

import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as playlistSongsReducer from "../../store/playlistSongsReducer";

function DeletePlaylistSong({sessionUser, setShowModal, playlistSong}) {
    const dispatch = useDispatch();
    const history = useHistory();


    const handleClick = async(e) => {
        const id = playlistSong.playlistId;
        const deleted = await dispatch(playlistSongsReducer.removePlaylistSong(playlistSong));

        if (deleted) {
        setShowModal(false);

        return history.push(`/playlists/${id}`);
        };
    };
  
    if (!sessionUser) return <Redirect to="/splash" />;
  
    return (
        <div className='modal'>
            <div className='confirm_del'>
                <h3>
                    Are you sure you want to remove this song from your playlist?
                </h3>
                <button onClick={(e)=> handleClick(e)}>Confirm</button>
            </div>
        </div>
    )
}

export default DeletePlaylistSong;