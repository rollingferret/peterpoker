import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import DeleteGameTableButton from './deletegametablebutton';
import css from './deletegametable.module.css'

function DeleteGameTableModal(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={`fas fa-trash-alt`} id={css.deletebutton}
      onClick={() => setShowModal(true)}></div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteGameTableButton gametableId={props.gametableId}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteGameTableModal;
