import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import DeleteCommentButton from './deletecommentbutton';
import css from './deletecommenform.module.css'

function DeleteCommentModal(props) {
  const [showModal, setShowModal] = useState(false);


  const onClose = () => setShowModal(false)


  return (
    <>
      <button className={`fas fa-trash-alt`} id={css.deletebutton}
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
