import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import AddGameButton from './addgamebutton';
import css from './addgamebutton.module.css'

function AddGameModal() {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => setShowModal(false)

  return (
    <>
      <div
        className={`fa fa-plus`} id={css.testaddgamebutton}
      onClick={() => setShowModal(true)}></div>
      {showModal && (
        <Modal onClose={onClose}>
          <AddGameButton onClose={onClose}/>
        </Modal>
      )}
    </>
  );
}

export default AddGameModal;
