import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeletePlaylistSong from './DeletePlaylistSong';

function DeletePlaylistSongModal({sessionUser, playlistSong}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <div className='delete' onClick={(e)=> e.stopPropagation()}>
            <button onClick={() => setShowModal(true)}>Remove</button>
            { showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeletePlaylistSong sessionUser={sessionUser} setShowModal={setShowModal} playlistSong={playlistSong} />
                </Modal>
            )}
        </div>
    );
}

export default DeletePlaylistSongModal;