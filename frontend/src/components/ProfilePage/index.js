import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import './ProfilePage.css';

const ProfilePage = ({sessionUser, songs, comments}) => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const filteredSongs = Object.values(songs).filter(song => song.userId === +id);
    const filteredComments = Object.values(comments).filter(comment => comment.userId === +id);

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])

    if (!sessionUser) return <Redirect to="/splash" />;

    if (filteredSongs === undefined || fetchedUser.id === undefined || filteredComments === undefined) {
        return (
            <></>
        );
    };


    return (

    );
};

export default ProfilePage;