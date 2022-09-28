import React, { useState } from 'react';

import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import * as playlistsReducer from "../../store/playlistsReducer";

import './EditPlaylist.css';

function EditPlaylist({sessionUser, setShowModal, playlist}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState(playlist.name);
    const [pic, setPic] = useState(playlist.pic);
    const [errors, setErrors] = useState([]);

    const validateImg = (url) => {
        let re = /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i;
        return re.test(url);
    }
  
    if (!sessionUser) return <Redirect to="/splash" />;
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        let valErrors = [];
        if (name !== "" &&
            (pic.length === 0 || validateImg(pic))) {
            setErrors([]);
            const newPlaylist = {
                name,
                pic
            };

            const returnedPlaylist = await dispatch(playlistsReducer.updatePlaylist(newPlaylist));
            
            if (returnedPlaylist) {
                reset();

                setShowModal(false);

                return history.push(`/playlists/${returnedPlaylist.id}`);
            };
            
        };

        if (pic.length > 0 && !validateImg(pic)) valErrors.push('Link must be to a jpg, jpeg, or png.');

        if (name === "") valErrors.push('The playlist must have a name.');

        return setErrors(valErrors);
    };

    const reset = () => {
        setName('');
        setPic('');
    };

    return (
        <div className='modal'>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Playlist Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Playlist Picture:
                    <input
                        type="text"
                        value={pic}
                        onChange={(e) => setPic(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Post</button>
            </form>
        </div>
    );
}

export default EditPlaylist;