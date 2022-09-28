import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import EditSongModal from '../EditSongModal';
import DeleteSongModal from '../DeleteSongModal';
import EditPlaylistModal from '../EditPlaylistModal';
import DeletePlaylistModal from '../DeletePlaylistModal';
import { useSong } from '../../context/songContext';
import { fetchSongs } from '../../store/songsReducer';

import './AllSongs.css';

const AllSongs = ({ sessionUser, songs, playlists }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { setCurrentSong } = useSong();

    const songClick = (e, song) => {
        e.stopPropagation();

        history.push(`/songs/${song.id}`)
    };

    const profileClick = (e, song) => {
        e.stopPropagation();

        history.push(`/profiles/${song.userId}`)
    };

    const playlistClick = (e, song) => {
        e.stopPropagation();

        history.push(`/profiles/${song.userId}`)
    };

    useEffect(() => {
        dispatch(fetchSongs())
    }, [dispatch])

    if (!sessionUser) return <Redirect to="/splash" />

    return (
        <>
            { Object.values(playlists).length > 0 ? (
                <div className='all_playlists'>
                    { Object.values(playlists).map(playlist => (
                        playlist.userId === sessionUser.id ? (
                            <div key={playlist.id} className='playlist'>
                                <img src={playlist.pic} alt={playlist.name} className='playlistImg'></img>
                                <p className='name_artist' onClick={(e)=> playlistClick(e, playlist)}>{playlist.name}</p>
                                <p className='playlist_username' onClick={(e)=> profileClick(e, playlist)}>{playlist.User.username}</p>
                                <EditPlaylistModal sessionUser={sessionUser} playlist={playlist} />
                                <DeletePlaylistModal sessionUser={sessionUser} playlist={playlist} />
                            </div>
                        ) : (
                            <div key={playlist.id} className='playlist'>
                                <img src={playlist.pic} alt={playlist.name} className='playlistImg'></img>
                                <p className='name_artist' onClick={(e)=> playlistClick(e, playlist)}>{playlist.name}</p>
                                <p className='playlist_username' onClick={(e)=> profileClick(e, playlist)}>{playlist.User.username}</p>
                            </div>
                        )
                    ))}
                </div>
            ) : <div></div> }

            { Object.values(songs).length > 0 ? (
                <div className='all_songs'>
                    { Object.values(songs).map(song => (
                        song.userId === sessionUser.id ? (
                            <div key={song.id} className="song" onClick={()=> setCurrentSong(song.link)}>
                                <img src={song.songPic} alt={song.title} className='songImg'></img>
                                <p className='title_artist' onClick={(e)=> songClick(e, song)}>{song.title} - - - By: {song.artist}</p>
                                <p className='song_username' onClick={(e)=> profileClick(e, song)}>{song.User.username}</p>
                                <EditSongModal sessionUser={sessionUser} song={song} />
                                <DeleteSongModal sessionUser={sessionUser} song={song} />
                            </div>
                        ) : (
                            <div key={song.id} className="song" onClick={()=> setCurrentSong(song.link)}>
                                <img src={song.songPic} alt={song.title} className='songImg'></img>
                                <p className='title_artist' onClick={(e)=> songClick(e, song)}>{song.title} - - - By: {song.artist}</p>
                                <p className='song_username' onClick={(e)=> profileClick(e, song)}>{song.User.username}</p>
                            </div>
                        )
                    ))}
                </div>
            ) :  <div></div> }
        </>
    );
};

export default AllSongs;