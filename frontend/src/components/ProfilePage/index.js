import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import AllSongs from '../AllSongs';

import './ProfilePage.css';

const ProfilePage = ({sessionUser, songs, profiles, playlists}) => {
    const { id } = useParams();
    const profilePic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

    if (!sessionUser) return <Redirect to="/splash" />;

    const user = Object.values(profiles).find(profile => profile.id === +id);

    const filteredSongs = Object.values(songs).filter(song => song.userId === +id);
    const filteredPlaylists = Object.values(playlists).filter(playlist => playlist.userId === +id);
    // const filteredComments = Object.values(comments).filter(comment => comment.userId === +id);

    if (user === undefined) {
        return (
            <></>
        );
    };

    return (
        <>
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
                <AllSongs sessionUser={sessionUser} songs={filteredSongs} playlists={filteredPlaylists} />
            </div>
        </>
    );
};

export default ProfilePage;