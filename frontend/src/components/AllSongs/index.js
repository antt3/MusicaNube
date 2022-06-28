import React from 'react';
import ReactPlayer from "react-player";
import { Redirect } from 'react-router-dom';

import './AllSongs.css';

const AllSongs = ({ sessionUser, songs }) => {


    // <ReactPlayer
    //     url={song.link}
    // />


    if (!sessionUser) return <Redirect to="/splash" />

    return (Object.values(songs).length > 0) ? (
        <div>
            {Object.values(songs).map(song => (
                <div key={song.id} className="song" >
                    <img src={song.songPic} alt={song.title}></img>
                    <h1>{song.title}</h1>
                    <h2>{song.artist}</h2>
                </div>
            ))}
        </div> 
    ) :  (
        <div>
        </div>
        )
    ;
};

export default AllSongs;