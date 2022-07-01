import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import * as profilesReducer from '../../store/profilesReducer'

import './ProfilePage.css';

const ProfilePage = ({sessionUser, songs, comments}) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const fetchedUser = useSelector(state => state.profile)

    const filteredSongs = Object.values(songs).filter(song => song.userId === +id);
    const filteredComments = Object.values(comments).filter(comment => comment.userId === +id);

    useEffect(() => {
        dispatch(profilesReducer.fetchProfile(id))
    }, [dispatch, id])

    if (!sessionUser) return <Redirect to="/splash" />;

    if (filteredSongs === undefined || fetchedUser.id === undefined || filteredComments === undefined) {
        return (
            <></>
        );
    };


    return (
        <></>
    );
};

export default ProfilePage;