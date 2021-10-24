import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from "react-router";
import css from './logoutbutton.module.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  let history = useHistory();

  const onLogout = async (e) => {
    await dispatch(logout()).then(history.push("/"));
  };

  return <button onClick={onLogout} className={css.navlogout}>Logout</button>;
};

export default LogoutButton;
