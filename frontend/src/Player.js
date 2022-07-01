import React from 'react';
import ReactPlayer from "react-player";

import { useSong } from './context/songContext';

import './Player.css';

const Player = () => {
    const { currentSong } = useSong();

    return (
        <div className='footer'>
            <ReactPlayer
                className='player'
                url={currentSong}
            />
        </div>
    );
};

export default Player;