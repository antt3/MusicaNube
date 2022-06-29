import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReactPlayer from "react-player";
import { Redirect } from 'react-router-dom';

import EditSongModal from '../EditSongModal';
import DeleteSongModal from '../DeleteSongModal';
import { useSong } from '../../context/songContext';
import { fetchSongs } from '../../store/songsReducer';

import './AllSongs.css';

const AllSongs = ({ sessionUser, songs }) => {
    const dispatch = useDispatch();
    const { currentSong, setCurrentSong } = useSong();

    useEffect(() => {
        dispatch(fetchSongs())
    }, [dispatch])

    if (!sessionUser) return <Redirect to="/splash" />

    return (Object.values(songs).length > 0) ? (
        <>
            <ReactPlayer
                url={currentSong}
            />
            <div className='all_songs'>
                {Object.values(songs).map(song => (
                    song.userId === sessionUser.id ?
                        <div key={song.id} className="song" onClick={()=> setCurrentSong(song.link)}>
                            <img src={song.songPic} alt={song.title} className='songImg'></img>
                            <p className='title'>{song.title}</p>
                            <p className='artist'>{song.artist}</p>
                            <EditSongModal sessionUser={sessionUser} song={song} />
                            <DeleteSongModal sessionUser={sessionUser} song={song} />
                        </div>
                    :
                    <div key={song.id} className="song" onClick={()=> setCurrentSong(song.link)}>
                        <img src={song.songPic} alt={song.title} className='songImg'></img>
                        <p className='title'>{song.title}</p>
                        <p className='artist'>{song.artist}</p>
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