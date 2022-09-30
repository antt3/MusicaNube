import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import EditSongModal from '../EditSongModal';
import DeleteSongModal from '../DeleteSongModal';
import EditPlaylistModal from '../EditPlaylistModal';
import DeletePlaylistModal from '../DeletePlaylistModal';
import PlaylistSongsFormModal from '../PlaylistSongsFormModal';

import { useSong } from '../../context/songContext';
import { fetchSongs } from '../../store/songsReducer';
import { fetchProfiles } from '../../store/profilesReducer';
import { fetchPlaylists } from '../../store/playlistsReducer';

import './SearchPage.css';
import '../AllSongs/AllSongs.css';

const SearchPage = ({ playlists, songs, profiles }) => {
    const [searchedSongs, setSearchedSongs] = useState([]);
    const [searchedPlaylists, setSearchedPlaylists] = useState([]);
    const [searchedUsers, setSearchedUsers] = useState([]);
    const sessionUser = useSelector((state) => state.session.user);
    const { searchedTerm } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const { setCurrentSong } = useSong();
    const demoPlaylistPic = "https://i0.wp.com/www.gloryofthesnow.com/wp-content/uploads/2022/05/Music-Orange.png?fit=700%2C700&ssl=1";
    const demoProfilePic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

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

        ( async () => {
        await dispatch(fetchPlaylists());
        await dispatch(fetchSongs());
        await dispatch(fetchProfiles());
        })();

    }, [dispatch])

    useEffect(() => {
        setSearchedSongs(songs.filter((song) => (
            song.title.toLowerCase().includes(searchedTerm.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchedTerm.toLowerCase())
        )))

        setSearchedPlaylists(playlists.filter((playlist) => (
            playlist.name.toLowerCase().includes(searchedTerm.toLowerCase())
        )))

        setSearchedUsers(profiles.filter((user) => (
            user.username.toLowerCase().includes(searchedTerm.toLowerCase())
        )))
    }, [searchedTerm])

    if (!sessionUser) return <Redirect to="/splash" />

    return (
        <div className='all_div'>
            { searchedPlaylists.length > 0 && <h1>Playlists</h1> }
            { searchedPlaylists.length > 0 ? (
                <div className='all_playlists'>
                    { searchedPlaylists.map(playlist => (
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
            { searchedSongs.length > 0 && <h1>Songs</h1> }
            { searchedSongs.length > 0 ? (
                <div className='all_songs'>
                    { searchedSongs.map(song => (
                        song.userId === sessionUser.id ? (
                            <div key={song.id} className="song" onClick={()=> setCurrentSong([song.link])}>
                                <img src={song.songPic} alt={song.title} className='songImg'></img>
                                <p className='title_artist' onClick={(e)=> songClick(e, song)}>{song.title} - - - By: {song.artist}</p>
                                <p className='song_username' onClick={(e)=> profileClick(e, song)}>{song.User.username}</p>
                                <EditSongModal sessionUser={sessionUser} song={song} />
                                <DeleteSongModal sessionUser={sessionUser} song={song} />
                                <PlaylistSongsFormModal sessionUser={sessionUser} song={song} playlists={playlists} />
                            </div>
                        ) : (
                            <div key={song.id} className="song" onClick={()=> setCurrentSong([song.link])}>
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

export default SearchPage;