import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteComment from './DeleteComment';

function DeleteCommentModal({sessionUser, song}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <>
            <button onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteComment sessionUser={sessionUser} setShowModal={setShowModal} song={song} />
                </Modal>
            )}
        </>
    );
}

export default DeleteCommentModal;