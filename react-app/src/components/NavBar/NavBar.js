import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import css from './NavBar.module.css';
import { useSelector } from "react-redux";
import LoginModal from '../loginmodal'


const NavBar = () => {

  const currentUser = useSelector((state) => state.session.user);

  const user_buttons = () => {
    if (currentUser) {
      return (
        <LogoutButton />
      );
    } else {
      return (
        <>
        <LoginModal className={css.navlogin}/>
        {/* <NavLink to="/login" className={css.navlogin}>Log In</NavLink> */}
        </>
      );
    }
  };


  return (  
    <>
    <div className={css.buffer}></div>
    <div className={css.outterdiv}>
    <div className={css.leftoutterdiv}>
    <div className={css.navhome}>
      <NavLink to='/' exact={true} className={css.homenavlink}>
      Home
      </NavLink> 
    </div>
    </div>
    <div className={css.middleoutterdiv}>
    <div className={css.logodiv}>
    <div className={css.logoinnerdiv}>Peter's Place!</div>
    </div>
    </div>
    <div className={css.rightoutterdiv}>
    <div className={css.rightbuttons}>
      <div className={css.navuserbuttons}>
      {user_buttons()}
      </div>
      </div>
    </div>
    </div>
    {/* <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
</nav> */}
    </>
  );
}

export default NavBar;