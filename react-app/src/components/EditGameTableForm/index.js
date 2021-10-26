import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import EditCommentForm from './editcommentform';

function EditGameTableModal(props) {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => setShowModal(false)

  return (
    <>
      <button
        className={`far fa-edit`}
      onClick={() => setShowModal(true)}></button>
      {showModal && (
        <Modal onClose={onClose}>
          <EditCommentForm onClose={onClose} gametableId={props.gametableId}/>
        </Modal>
      )}
    </>
  );
}

export default EditGameTableModal;