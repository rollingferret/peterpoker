import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import LoginForm from '../auth/LoginForm';
import css from './loginmodal.module.css'

function LoginModal(props) {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => setShowModal(false)

  return (
    <>
      <div className={css.outtermodaldiv}
      onClick={() => setShowModal(true)}>Login</div>
      {showModal && (
        <Modal onClose={onClose}>
          <LoginForm onClose={onClose}/>
        </Modal>
      )}
    </>
  );
}

export default LoginModal;