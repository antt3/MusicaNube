import React from 'react';
import ReactPlayer from "react-player";

import { useSong } from './context/songContext';

const Player = () => {
    const { currentSong } = useSong();

    return (
        <ReactPlayer
                url={currentSong}
            />
    );
};

export default Player;