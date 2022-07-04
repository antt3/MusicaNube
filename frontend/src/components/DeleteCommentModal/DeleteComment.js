import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import * as commentsReducer from '../../store/commentsReducer';

import './DeleteComment.css';

const DeleteComment = ({sessionUser, setShowModal, songComment}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = async(e) => {
        const songId = songComment.songId;
        const deleted = await dispatch(commentsReducer.removeComment(songComment));

        if (deleted) {

            setShowModal(false);

            return history.push(`/songs/${songId}`);

        };
    };

    if (!sessionUser) return <Redirect to="/splash" />;
  
    return (
        <div className='modal'>
            <div className='confirm_del' >
                <h3>
                    Are you sure you want to delete your comment?
                </h3>
                <button onClick={(e)=> handleClick(e)}>Confirm</button>
            </div>
        </div>
    )
};

export default DeleteComment;