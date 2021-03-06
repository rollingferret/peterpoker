import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import css from './userlist.module.css'
import poro from "../../assets/bouncingporo.gif";


function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
      <NavLink to={`/users/${user.id}`} className={css.usercard} key={user.id}>
      <div className={css.useravatar} style={{backgroundImage: `url(${user.avatar_url?user.avatar_url:`${poro}`})`}}></div>
      <div className={css.userId}>{user.username}</div>
      <div className={css.userbio}>{user.bio}</div>
      </NavLink>
    );
  });

  if (!userComponents) {
    return null
  } else {
  return (
    <div className={css.userlistvertcenter}>
    <div className={css.userlistoutter}>
      <Link to={`/users`} className={css.userlistwords}>User List:</Link>
      <div className={css.usercomponentsoutter}>{userComponents}</div>
    </div>
    </div>
  );
}}

export default UsersList;