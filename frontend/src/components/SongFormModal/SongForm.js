import React, { useState } from 'react';

import './SongForm.css';

import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as songsReducer from "../../store/songsReducer";

function SongForm({sessionUser, setShowModal}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [songPic, setSongPic] = useState('');
    const [link, setLink] = useState('');

    const [errors, setErrors] = useState([]);
  
    if (!sessionUser) return <Redirect to="/splash" />;
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('here1')
        let valErrors = [];
        if (title !== "" &&
            artist !== "" &&
            songPic !== "" &&
            link !== "" &&
            link.startsWith('https://soundcloud.com/')) {
            setErrors([]);
            const newSong = {
                title,
                artist,
                songPic,
                link,
                sessionUser
            };

            console.log('here2')

            const returnedSong = await dispatch(songsReducer.writeSong(newSong));
            
            if (returnedSong) {
                reset();

                setShowModal(false);

                return history.push(`/songs/${returnedSong.id}`);
            };
            
        };

        if (link.startsWith('https://soundcloud.com/') === false) valErrors.push('Must be a Soundcloud link');

        if (title === "" ||
        artist === "" ||
        songPic === "" ||
        link === "") valErrors.push('Must fill in all fields');

        return setErrors(valErrors);
    };

    const reset = () => {
        setTitle('');
        setArtist('');
        setSongPic('');
        setLink('');
    };

    return (
        <div className='modal'>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Artist:
                    <input
                        type="text"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Song Picture:
                    <input
                        type="text"
                        value={songPic}
                        onChange={(e) => setSongPic(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Link:
                    <input
                        type="text"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Post</button>
            </form>
        </div>
    );
}

export default SongForm;