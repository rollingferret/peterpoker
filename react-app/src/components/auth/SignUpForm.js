import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import { login } from "../../store/session";
import css from './signupform.module.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();


  const demoUser = async () => {
    await dispatch(login("Demo", "password"));
    history.push("/home");
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(["Passwords don't match"])
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  return (
    <>  
    <div className={css.addoutterdiv}>

    <form onSubmit={onSignUp} className={css.adddivform}>
      <div className={css.inneradddivs2}>
          <div className={css.signupwords}>Join now!</div>
          <div className={css.editgamegame}>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
      </div>



      {/* <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div> */}  
      <div className={css.inneradddivs}>
      <div className={css.signupchunks}>
        {/* <label>User Name</label> */}
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          required={true}
          placeholder={'Username'}
          className={css.signupdiv}
        ></input>
      </div>
      <div className={css.signupchunks}>
        {/* <label>Email</label> */}
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          required={true} 
          placeholder={'Email'}
          className={css.signupdiv}


        ></input>
      </div>
      <div className={css.signupchunks}>
        {/* <label>Password</label> */}
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          required={true}
          placeholder={'Password'}
          className={css.signupdiv}

        ></input>
      </div>
      <div className={css.signupchunks}>
        {/* <label>Repeat Password</label> */}
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          placeholder={'Repeat Password'}
          className={css.signupdiv}

        ></input>
      </div>
      </div>
      <div className={css.inneradddivs2}>

      <button type='submit' className={css.buttondivmodal}>Sign Up</button>
      </div>
    </form>
    <div className={css.inneradddivs2} id={css.topborderlinediv}>

        <button onClick={demoUser} className={css.buttondivmodal} id={css.bottomsignup}>
        Demo User
    </button>
    </div>
    </div>
    </>
  );
};

export default SignUpForm;
