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
        if (title !== "" &&
            artist !== "" &&
            songPic !== "" &&
            link !== "" ) {
            setErrors([]);
            const newSong = {
                title,
                artist,
                songPic,
                link,
                sessionUser
            };
            const returnedSong = dispatch(songsReducer.writeSong(newSong))
            
            if (returnedSong) {
                reset();

                setShowModal(false);

                return history.push('/');
            }
            
        }
        return setErrors(['Must fill in all fields']);
    };

    const reset = () => {
        setTitle('');
        setArtist('');
        setSongPic('');
        setLink('');
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <h3>Post your song</h3>
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
    );
}

export default SongForm;