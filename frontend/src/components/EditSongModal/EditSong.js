import React, { useState } from "react";

import './EditSong.css';

import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as songsReducer from "../../store/songsReducer";

function EditSong({sessionUser, setShowModal, song}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState(song.title);
    const [artist, setArtist] = useState(song.artist);
    const [songPic, setSongPic] = useState(song.songPic);
    const [link, setLink] = useState(song.link);

    const [errors, setErrors] = useState([]);
  
    if (!sessionUser) return <Redirect to="/splash" />;
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (title !== "" &&
            artist !== "" &&
            songPic !== "" &&
            link !== "" &&
            link.startsWith('https://soundcloud.com/')) {
            setErrors([]);
            const editedSong = {
                title,
                artist,
                songPic,
                link,
                sessionUser,
                song
            };
            const returnedSong = await dispatch(songsReducer.updateSong(editedSong))
            
            if (returnedSong) {
                reset();

                setShowModal(false);

                return history.push(`/songs/${returnedSong.id}`);
            }
            
        }
        return setErrors(['Cannot have empty fields']);
    };

    const reset = () => {
        setTitle('');
        setArtist('');
        setSongPic('');
        setLink('');
    };
  
    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <h3>Edit your song</h3>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditSong