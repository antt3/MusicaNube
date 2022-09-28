import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPlaylist from './EditPlaylist';

function EditPlaylistModal({sessionUser, playlist}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <div className='edit' onClick={(e)=> e.stopPropagation()} >
            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditPlaylist sessionUser={sessionUser} setShowModal={setShowModal} playlist={playlist} />
                </Modal>
            )}
        </div>
    );
}

export default EditPlaylistModal;