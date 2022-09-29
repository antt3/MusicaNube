import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditComment from './EditComment';

function EditCommentModal({sessionUser, song, comment}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <>
            <button className='' onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditComment sessionUser={sessionUser} setShowModal={setShowModal} song={song} comment={comment} />
                </Modal>
            )}
        </>
    );
}

export default EditCommentModal;