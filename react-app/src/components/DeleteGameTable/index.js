import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import DeleteGameTableButton from './deletegametablebutton';

function DeleteGameTableModal(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={`fas fa-trash-alt`}
      onClick={() => setShowModal(true)}></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteGameTableButton gametableId={props.gametableId}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteGameTableModal;
