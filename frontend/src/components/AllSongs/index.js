import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import EditSongModal from '../EditSongModal';
import DeleteSongModal from '../DeleteSongModal';
import { useSong } from '../../context/songContext';
import { fetchSongs } from '../../store/songsReducer';

import './AllSongs.css';

const AllSongs = ({ sessionUser, songs }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { setCurrentSong } = useSong();

    const onClick = (e, song) => {
        e.stopPropagation();

        history.push(`/songs/${song.id}`)
    };

    useEffect(() => {
        dispatch(fetchSongs())
    }, [dispatch])

    if (!sessionUser) return <Redirect to="/splash" />

    return (Object.values(songs).length > 0) ? (
        <>
            <div className='all_songs'>
                {Object.values(songs).map(song => (
                    song.userId === sessionUser.id ?
                        <div key={song.id} className="song" onClick={()=> setCurrentSong(song.link)}>
                            <img src={song.songPic} alt={song.title} className='songImg'></img>
                            <p className='title_artist' onClick={()=> history.push(`/songs/${song.id}`)}>{song.title} - - - By: {song.artist}</p>
                            {!!song.User ? <p className='song_username'>{song.User.username}</p> : <p></p>}
                            <EditSongModal sessionUser={sessionUser} song={song} />
                            <DeleteSongModal sessionUser={sessionUser} song={song} />
                        </div>
                    :
                    <div key={song.id} className="song" onClick={()=> setCurrentSong(song.link)}>
                        <img src={song.songPic} alt={song.title} className='songImg'></img>
                        <p className='title_artist' onClick={(e)=> onClick(e, song)}>{song.title} - - - By: {song.artist}</p>
                        {!!song.User ? <p className='song_username'>{song.User.username}</p> : <p></p>}
                    </div>
                ))}
            </div>
        </>
    ) :  (
        <div>
        </div>
        )
    ;
};

export default AllSongs;