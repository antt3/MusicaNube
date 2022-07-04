import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteSong from './DeleteSong';

function DeleteSongModal({sessionUser, song}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <div className='delete' onClick={(e)=> e.stopPropagation()}>
            <button onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteSong sessionUser={sessionUser} setShowModal={setShowModal} song={song} />
                </Modal>
            )}
        </div>
    );
}

export default DeleteSongModal;