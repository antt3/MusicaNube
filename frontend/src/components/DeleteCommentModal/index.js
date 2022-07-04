import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteComment from './DeleteComment';

function DeleteCommentModal({sessionUser, songComment}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <>
            <button className='del_comment' onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteComment sessionUser={sessionUser} setShowModal={setShowModal} songComment={songComment} />
                </Modal>
            )}
        </>
    );
}

export default DeleteCommentModal;