import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as profilesReducer from '../../store/profilesReducer';
import AllSongs from '../AllSongs';

import './ProfilePage.css';

const ProfilePage = ({sessionUser, songs, playlists}) => {
    const profiles = useSelector((state) => state.profilesState)
    const { id } = useParams();
    const dispatch = useDispatch();
    const profilePic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

    const user = Object.values(profiles).find(profile => profile.id === +id);


    const filteredSongs = Object.values(songs).filter(song => song.userId === +id);
    const filteredPlaylists = Object.values(playlists).filter(playlist => playlist.userId === +id);
    // const filteredComments = Object.values(comments).filter(comment => comment.userId === +id);
    useEffect(()=> {
        dispatch(profilesReducer.fetchProfiles());
    }, [dispatch])

    return (
        user && <>
            <div className='profile_div'>
                <div className='top'>
                    {user.profilePic === '' ?
                    <img src={profilePic} alt={user.username}></img> :
                    <img src={user.profilePic} alt={user.username}></img>
                    }
                    <h1>{user.username}</h1>
                    <h3>{user.location}</h3>
                    <p>{user.bio}</p>
                </div>
            </div>
            <div>
                <AllSongs songs={filteredSongs} playlists={filteredPlaylists} />
            </div>
        </>
    );
};

export default ProfilePage;