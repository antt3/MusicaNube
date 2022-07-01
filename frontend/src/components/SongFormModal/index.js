import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SongForm from './SongForm';

function SongFormModal({sessionUser}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <>
            <p className='addPost' onClick={() => setShowModal(true)}>Add A Song</p>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SongForm sessionUser={sessionUser} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    );
}

export default SongFormModal;