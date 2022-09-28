import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeletePlaylist from './DeletePlaylist';

function DeletePlaylistModal({sessionUser, playlist}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <div className='delete' onClick={(e)=> e.stopPropagation()}>
            <button onClick={() => setShowModal(true)}>Delete</button>
            { showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeletePlaylist sessionUser={sessionUser} setShowModal={setShowModal} playlist={playlist} />
                </Modal>
            )}
        </div>
    );
}

export default DeletePlaylistModal;