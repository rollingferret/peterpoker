import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import css from './login.module.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [login_param, setLoginParam] = useState("");
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(login_param, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateLoginParam = (e) => {
    setLoginParam(e.target.value);
  };

  // const updateEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  return (
    <>
    <div className={css.addoutterdiv}>

    <form onSubmit={onLogin} className={css.adddivform}>

    <div className={css.inneradddivs2}>
          <label>Input info!</label>
          <div className={css.editgamegame}>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
      </div>
      <div className={css.inneradddivs}>
        <input
          name="login_param"
          type="text"
          placeholder="Username or Email"
          value={login_param}
          onChange={updateLoginParam}
          required={true}
          className={css.gametablecontent}
        />
      </div>
      <div className={css.inneradddivs}>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
          required={true}
          className={css.gametablecontent}
        />
        </div>
        <div className={css.inneradddivs2}>
        <button type='submit' className={css.buttondivmodal}>Login</button>
      </div>
    </form>
    </div>
    </>
  );
};

export default LoginForm;
