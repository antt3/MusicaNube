import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SongForm from './SongForm';

function SongFormModal({sessionUser}) {
    const [showModal, setShowModal] = useState(false);
    const onClick = (e) => {
        e.stopPropagation();
        setShowModal(true)
    }

    return (
        <div onClick={(e) => onClick(e)}>
            <p className='addPost'>Add A Song</p>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SongForm sessionUser={sessionUser} setShowModal={setShowModal}/>
                </Modal>
            )}
        </div>
    );
}

export default SongFormModal;