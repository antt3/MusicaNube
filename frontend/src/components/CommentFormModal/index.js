import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentForm from './CommentForm';

function CommentFormModal({sessionUser, song}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <>
            <button className='create_comment' onClick={() => setShowModal(true)}>Make a Comment</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CommentForm sessionUser={sessionUser} setShowModal={setShowModal} song={song} />
                </Modal>
            )}
        </>
    );
}

export default CommentFormModal;