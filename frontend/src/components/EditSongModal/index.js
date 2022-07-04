import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSong from './EditSong';

function EditSongModal({sessionUser, song}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <div className='edit' onClick={(e)=> e.stopPropagation()} >
            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSong sessionUser={sessionUser} setShowModal={setShowModal} song={song} />
                </Modal>
            )}
        </div>
    );
}

export default EditSongModal;