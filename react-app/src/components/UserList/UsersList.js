import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './userlist.module.css'

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
      <div className={css.usercard} key={user.id}>
        <div className={css.useravatar} style={{backgroundImage: `url(${user.avatar_url?user.avatar_url:'https://38.media.tumblr.com/21f6de2276453b6f6519e1ae3d97e242/tumblr_nfima4FU7i1tm4vpxo1_250.gif'})`}}></div>
        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
        <div className={css.userbio}>{user.bio}</div>
      </div>
    );
  });

  if (!userComponents) {
    return null
  } else {
  return (
    <>
      <h1>User List: </h1>
      <ul>{userComponents}</ul>
    </>
  );
}}

export default UsersList;