import React from 'react';
import ReactPlayer from "react-player";
import { Redirect } from 'react-router-dom';

import { useSong } from '../../context/songContext';

import './AllSongs.css';

const AllSongs = ({ sessionUser, songs }) => {
    const { currentSong, setCurrentSong } = useSong();

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
                            <button className='edit'>Edit</button>
                            <button className='delete'>Delete</button>
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