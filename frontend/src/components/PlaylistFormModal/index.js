import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PlaylistForm from './PlaylistForm';

function PlaylistFormModal({sessionUser}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <>
            <p className='addPost' onClick={() => setShowModal(true)}> Create A Playlist</p>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PlaylistForm sessionUser={sessionUser} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    );
}

export default PlaylistFormModal;