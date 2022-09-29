import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PlaylistSongsForm from './PlaylistSongsForm';

function SongFormModal({sessionUser, song, playlists}) {
    const [showModal, setShowModal] = useState(false);
    const onClick = (e) => {
        e.stopPropagation();
        setShowModal(true)
    }

    return (
        <div className='add_playlist'>
            <button onClick={(e) => onClick(e)}>Add To Playlist</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PlaylistSongsForm sessionUser={sessionUser} setShowModal={setShowModal} song={song} playlists={playlists} />
                </Modal>
            )}
        </div>
    );
}

export default SongFormModal;