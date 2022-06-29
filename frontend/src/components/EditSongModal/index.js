import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSong from './EditSong';

function EditSongModal({sessionUser, song}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <>
            <button className='edit' onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSong sessionUser={sessionUser} setShowModal={setShowModal} song={song} />
                </Modal>
            )}
        </>
    );
}

export default EditSongModal;