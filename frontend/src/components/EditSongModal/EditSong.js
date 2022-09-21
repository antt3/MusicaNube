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
        // console.log('here1')
        const valErrors = [];
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

            const returnedSong = await dispatch(songsReducer.updateSong(editedSong));
            
            if (returnedSong) {
                reset();

                // console.log('here2')

                setShowModal(false);

                return history.push(`/songs/${returnedSong.id}`);
            };
            
        };

        if (link.startsWith('https://soundcloud.com/') === false) valErrors.push('Must be a Soundcloud link');

        if (title === "" ||
        artist === "" ||
        songPic === "" ||
        link === "") valErrors.push('Must fill in all fields');

        console.log('link: ', link.startsWith('https://soundcloud.com/'))

        return setErrors(valErrors);
    };

    const reset = () => {
        setTitle(song.title);
        setArtist(song.artist);
        setSongPic(song.songPic);
        setLink(song.link);
    };
  
    return (
        <div className="modal">
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
                <button type="submit">Submit</button>
                <h2>How to add your Soundcloud link</h2>
                <ol>
                    <li>Open the Soundcloud web app <a className='sc_link' href='https://soundcloud.com/discover' target="_blank" rel='noreferrer' >HERE</a></li>
                    <li>Click on the search bar and search up the song you want to add.</li>
                    <li>Click on the song's title to bring you to its song page</li>
                    <li>Copy the url address and paste it into the link input above</li>
                </ol>
            </form>
        </div>
    )
}

export default EditSong