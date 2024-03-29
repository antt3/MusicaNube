import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';


import EditPlaylistModal from '../EditPlaylistModal';
import DeletePlaylistModal from '../DeletePlaylistModal';
import DeletePlaylistSongModal from '../DeletePlaylistSongModal';
import { useSong } from '../../context/songContext';
import { fetchSongs } from '../../store/songsReducer';
import { fetchPlaylists } from '../../store/playlistsReducer';

import './SinglePlaylist.css';

const SinglePlaylist = ({ sessionUser, playlists, playlistSongs }) => {
    const { id } = useParams();
    const playlist = Object.values(playlists).find((playlist) => playlist.id === +id);
    const filteredPlaylistSongs = Object.values(playlistSongs).filter(playlistSong => playlistSong.playlistId === +id);
    const dispatch = useDispatch();
    const history = useHistory();
    const { setCurrentSong } = useSong();
    const demoPlaylistPic = "https://i0.wp.com/www.gloryofthesnow.com/wp-content/uploads/2022/05/Music-Orange.png?fit=700%2C700&ssl=1";

    const profileClick = (e, songOrPlaylist) => {
        e.stopPropagation();

        history.push(`/profiles/${songOrPlaylist.userId}`)
    };

    const songClick = (e, song) => {
        e.stopPropagation();

        history.push(`/songs/${song.id}`)
    };

    // const playPlaylist = () => {
    //     const songLinks = [];

    //     if (filteredPlaylistSongs) {

    //         filteredPlaylistSongs.forEach((playlistSong) => {
    //             songLinks.push(playlistSong.Song.link);
    //         });
    //         setCurrentSong([songLinks[0]]);

    //     }

    // };

    useEffect(() => {
        dispatch(fetchPlaylists());
        dispatch(fetchSongs());
    }, [dispatch])

    if (!sessionUser) return <Redirect to="/splash" />

    return (
        <div className='playlist_all_div'>
            { playlist ? (
                <div className='all_playlist'>
                    { playlist.userId === sessionUser.id ? (
                        <div key={playlist.id} className='single_playlist'>
                            <img src={playlist.pic ? playlist.pic : demoPlaylistPic} alt={playlist.name} className='single_playlistImg'></img>
                            <p className='single_playlist_name'>{playlist.name}</p>
                            <p className='single_playlist_username' onClick={(e)=> profileClick(e, playlist)}>{playlist.User.username}</p>
                            <div id='single_playlist_buttons'>
                                <EditPlaylistModal sessionUser={sessionUser} playlist={playlist} />
                                <DeletePlaylistModal sessionUser={sessionUser} playlist={playlist} />
                            </div>
                            { filteredPlaylistSongs.length > 0 ? (
                                <div className='sp_songs_div'>
                                    { filteredPlaylistSongs.map(playlistSong => (
                                        <div className='sp_song_div' key={playlistSong.id} onClick={()=> setCurrentSong([playlistSong.Song.link])}>
                                            <p className='sp_title_artist' onClick={(e)=> songClick(e, playlistSong.Song)}>{playlistSong.Song.title} - - - By: {playlistSong.Song.artist}</p>
                                            <div className='sp_delete'><DeletePlaylistSongModal sessionUser={sessionUser} playlistSong={playlistSong} /></div>
                                        </div>
                                    ))}
                                </div>
                            ) : <div className='no_songs'>There are no songs in this playlist</div> }
                        </div>
                    ) : (
                        <div key={playlist.id} className='single_playlist'>
                            <img src={playlist.pic ? playlist.pic : demoPlaylistPic} alt={playlist.name} className='single_playlistImg'></img>
                            <p className='single_playlist_name'>{playlist.name}</p>
                            <p className='single_playlist_username' onClick={(e)=> profileClick(e, playlist)}>{playlist.User.username}</p>
                            { playlistSongs ? (
                                <div className='sp_songs_div'>
                                    { filteredPlaylistSongs.map(playlistSong => (
                                        <div className='sp_song_div' key={playlistSong.id} onClick={()=> setCurrentSong([playlistSong.Song.link])}>
                                            <p className='sp_title_artist' onClick={(e)=> songClick(e, playlistSong.Song)}>{playlistSong.Song.title} - - - By: {playlistSong.Song.artist}</p>
                                            <div className='sp_delete'></div>
                                        </div>
                                    ))}
                                </div>
                            ) : <div className='no_songs'>There are no songs in this playlist</div> }
                        </div>
                    )}
                </div>
            ) : <div></div> }
        </div>
    );
};

export default SinglePlaylist;