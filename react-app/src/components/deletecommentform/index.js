import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import DeleteCommentButton from './deletecommentbutton';

function DeleteCommentModal(props) {
  const [showModal, setShowModal] = useState(false);


  const onClose = () => setShowModal(false)


  return (
    <>
      <button className={`fas fa-trash-alt`}
      onClick={() => setShowModal(true)}></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteCommentButton onClose={onClose} commentId={props.commentId}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteCommentModal;
