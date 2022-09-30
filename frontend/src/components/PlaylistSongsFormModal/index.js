import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PlaylistSongsForm from './PlaylistSongsForm';

function SongFormModal({sessionUser, song, playlists}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='add_playlist' onClick={(e)=> e.stopPropagation()}>
            <button onClick={() => setShowModal(true)}>Add To Playlist</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PlaylistSongsForm sessionUser={sessionUser} setShowModal={setShowModal} song={song} playlists={playlists} />
                </Modal>
            )}
        </div>
    );
}

export default SongFormModal;