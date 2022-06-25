import React from 'react';
import { Redirect } from 'react-router-dom';

import './AllSongs.css';

const AllSongs = ({ sessionUser, songsState }) => {
    if (!sessionUser) return <Redirect to="/splash" />

    return (
        <div>
            {songsState.map(song => (
                <div>
                    <h1>{song.title}</h1>
                    <figure>
                        <figcaption>Listen to the T-Rex:</figcaption>
                        <audio
                            controls
                            src={song.link}>
                                Your browser does not support the
                                <code>audio</code> element.
                        </audio>
                    </figure>
                </div>
            ))}
        </div>
    );
};

export default AllSongs;