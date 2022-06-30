import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as songsReducer from '../../store/songsReducer';
import * as commentsReducer from '../../store/commentsReducer';

import './singleSong.css';

const SingleSong = ({sessionUser, songs, comments }) => {
    const dispatch = useDispatch();
    const postId = useParams();
    const song = 

    return (

    );
};

export default SingleSong;