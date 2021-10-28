import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import AddGameButton from './addgamebutton';

function AddGameModal() {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => setShowModal(false)

  return (
    <>
      <button
        className={`far fa-edit`}
      onClick={() => setShowModal(true)}></button>
      {showModal && (
        <Modal onClose={onClose}>
          <AddGameButton onClose={onClose}/>
        </Modal>
      )}
    </>
  );
}

export default AddGameModal;
