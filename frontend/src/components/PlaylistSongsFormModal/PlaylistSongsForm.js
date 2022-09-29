import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { writePlaylistSong } from '../../store/playlistSongsReducer';

const PlaylistSongForm = ({ sessionUser, setShowModal, playlists, song }) => {
    const filteredPlaylists = Object.values(playlists).filter(playlist => playlist.userId === sessionUser.id);
    const demoPlaylistPic = "https://i0.wp.com/www.gloryofthesnow.com/wp-content/uploads/2022/05/Music-Orange.png?fit=700%2C700&ssl=1";
    const dispatch = useDispatch();
    const history = useHistory();

    const onClick = async(e, playlist) => {
        e.preventDefault();

        const playlistSong = {
            playlistId: playlist.id,
            songId: song.id
        };

        await dispatch(writePlaylistSong(playlistSong));

        setShowModal(false);

        return history.push(`/playlists/${playlistSong.playlistId}`);
    }

    return (
        <div className='all_div'>
            { playlists ? (
                <div className='all_playlists'>
                    { filteredPlaylists.map(playlist => (
                        <div key={playlist.id} className='playlist'>
                            <img src={playlist.pic ? playlist.pic : demoPlaylistPic} alt={playlist.name} className='playlistImg'></img>
                            <p className='playlist_name'>{playlist.name}</p>
                            <button className='playlist_username' onClick={e => onClick(e, playlist)}>Add</button>
                        </div>
                    ))}
                </div>
            ) : <div></div> }
        </div>
    );
};

export default PlaylistSongForm