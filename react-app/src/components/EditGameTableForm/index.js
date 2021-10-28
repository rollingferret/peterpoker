import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import EditGameTableForm from './editgametable';
import css from './editgametable.module.css'

function EditGameTableModal(props) {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => setShowModal(false)

  return (
    <>
      <div
        className={`far fa-edit`} id={css.editbutton}
      onClick={() => setShowModal(true)}></div>
      {showModal && (
        <Modal onClose={onClose}>
          <EditGameTableForm onClose={onClose} gametableId={props.gametableId}/>
        </Modal>
      )}
    </>
  );
}

export default EditGameTableModal;