import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';


import EditPlaylistModal from '../EditPlaylistModal';
import DeletePlaylistModal from '../DeletePlaylistModal';
import { useSong } from '../../context/songContext';
import { fetchSongs } from '../../store/songsReducer';
import { fetchPlaylists } from '../../store/playlistsReducer';

import './SinglePlaylist.css';

const SinglePlaylist = ({ sessionUser, songs, playlists, playlistSongs }) => {
    const { id } = useParams();
    const playlist = Object.values(playlists).filter((playlist) => playlist.id === +id)[0];
    const dispatch = useDispatch();
    const history = useHistory();
    const { setCurrentSong } = useSong();
    const demoPlaylistPic = "https://i0.wp.com/www.gloryofthesnow.com/wp-content/uploads/2022/05/Music-Orange.png?fit=700%2C700&ssl=1";

    const profileClick = (e, songOrPlaylist) => {
        e.stopPropagation();

        history.push(`/profiles/${songOrPlaylist.userId}`)
    };

    const playlistClick = (e, playlist) => {
        e.stopPropagation();

        history.push(`/playlist/${playlist.id}`)
    };

    useEffect(() => {
        dispatch(fetchPlaylists());
        dispatch(fetchSongs());
    }, [dispatch])

    if (!sessionUser) return <Redirect to="/splash" />

    return (
        <>
            { playlist ? (
                <div className='all_playlists'>
                    { playlist.userId === sessionUser.id ? (
                        <div key={playlist.id} className='playlist'>
                            <img src={playlist.pic ? playlist.pic : demoPlaylistPic} alt={playlist.name} className='playlistImg'></img>
                            <p className='name_artist' onClick={(e)=> playlistClick(e, playlist)}>{playlist.name}</p>
                            <p className='playlist_username' onClick={(e)=> profileClick(e, playlist)}>{playlist.User.username}</p>
                            <EditPlaylistModal sessionUser={sessionUser} playlist={playlist} />
                            <DeletePlaylistModal sessionUser={sessionUser} playlist={playlist} />
                        </div>
                    ) : (
                        <div key={playlist.id} className='playlist'>
                            <img src={playlist.pic ? playlist.pic : demoPlaylistPic} alt={playlist.name} className='playlistImg'></img>
                            <p className='name_artist' onClick={(e)=> playlistClick(e, playlist)}>{playlist.name}</p>
                            <p className='playlist_username' onClick={(e)=> profileClick(e, playlist)}>{playlist.User.username}</p>
                        </div>
                    )}
                </div>
            ) : <div></div> }
        </>
    );
};

export default SinglePlaylist;