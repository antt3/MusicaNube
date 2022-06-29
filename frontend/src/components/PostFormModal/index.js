import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SongForm from './SongForm';

function SongFormModal() {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <>
            <button onClick={() => setShowModal(true)}>Add A Song</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SongForm />
                </Modal>
            )}
        </>
    );
}

export default SongFormModal;