import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import EditSongModal from '../EditSongModal';
import DeleteSongModal from '../DeleteSongModal';
import EditPlaylistModal from '../EditPlaylistModal';
import DeletePlaylistModal from '../DeletePlaylistModal';
import PlaylistSongsFormModal from '../PlaylistSongsFormModal';
import { useSong } from '../../context/songContext';
import { fetchSongs } from '../../store/songsReducer';
import { fetchPlaylists } from '../../store/playlistsReducer';

import './AllSongs.css';

const AllSongs = ({ playlists, songs }) => {
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const { setCurrentSong } = useSong();
    const demoPlaylistPic = "https://i0.wp.com/www.gloryofthesnow.com/wp-content/uploads/2022/05/Music-Orange.png?fit=700%2C700&ssl=1";


    const songClick = (e, song) => {
        e.stopPropagation();

        history.push(`/songs/${song.id}`)
    };

    const profileClick = (e, songOrPlaylist) => {
        e.stopPropagation();

        history.push(`/profiles/${songOrPlaylist.userId}`)
    };

    const playlistClick = (e, playlist) => {
        e.stopPropagation();

        history.push(`/playlists/${playlist.id}`)
    };

    useEffect(() => {
        dispatch(fetchPlaylists());
        dispatch(fetchSongs());
    }, [dispatch])

    if (!sessionUser) return <Redirect to="/splash" />

    return (
        <div className='all_div'>
            { playlists && <h1>Playlists</h1> }
            { playlists ? (
                <div className='all_playlists'>
                    { Object.values(playlists).map(playlist => (
                        playlist.userId === sessionUser.id ? (
                            <div key={playlist.id} className='playlist'>
                                <img src={playlist.pic ? playlist.pic : demoPlaylistPic} alt={playlist.name} className='playlistImg' onClick={(e)=> playlistClick(e, playlist)}></img>
                                <p className='playlist_name' onClick={(e)=> playlistClick(e, playlist)}>{playlist.name}</p>
                                <p className='playlist_username' onClick={(e)=> profileClick(e, playlist)}>{playlist.User.username}</p>
                                <div id='playlist_buttons'>
                                    <EditPlaylistModal sessionUser={sessionUser} playlist={playlist} />
                                    <DeletePlaylistModal sessionUser={sessionUser} playlist={playlist} />
                                </div>
                            </div>
                        ) : (
                            <div key={playlist.id} className='playlist'>
                                <img src={playlist.pic ? playlist.pic : demoPlaylistPic} alt={playlist.name} className='playlistImg' onClick={(e)=> playlistClick(e, playlist)}></img>
                                <p className='playlist_name' onClick={(e)=> playlistClick(e, playlist)}>{playlist.name}</p>
                                <p className='playlist_username' onClick={(e)=> profileClick(e, playlist)}>{playlist.User.username}</p>
                            </div>
                        )
                    ))}
                </div>
            ) : <div></div> }
            { songs && <h1>Songs</h1> }
            { songs ? (
                <div className='all_songs'>
                    { Object.values(songs).map(song => (
                        song.userId === sessionUser.id ? (
                            <div key={song.id} className="song" onClick={()=> setCurrentSong(song.link)}>
                                <img src={song.songPic} alt={song.title} className='songImg'></img>
                                <p className='title_artist' onClick={(e)=> songClick(e, song)}>{song.title} - - - By: {song.artist}</p>
                                <p className='song_username' onClick={(e)=> profileClick(e, song)}>{song.User.username}</p>
                                <EditSongModal sessionUser={sessionUser} song={song} />
                                <DeleteSongModal sessionUser={sessionUser} song={song} />
                                <PlaylistSongsFormModal sessionUser={sessionUser} song={song} playlists={playlists} />
                            </div>
                        ) : (
                            <div key={song.id} className="song" onClick={()=> setCurrentSong(song.link)}>
                                <img src={song.songPic} alt={song.title} className='songImg'></img>
                                <p className='title_artist' onClick={(e)=> songClick(e, song)}>{song.title} - - - By: {song.artist}</p>
                                <p className='song_username' onClick={(e)=> profileClick(e, song)}>{song.User.username}</p>
                                <PlaylistSongsFormModal sessionUser={sessionUser} song={song} playlists={playlists} />
                            </div>
                        )
                    ))}
                </div>
            ) :  <div></div> }
        </div>
    );
};

export default AllSongs;