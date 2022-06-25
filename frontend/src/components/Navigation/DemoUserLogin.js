import React from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';

const DemoUserLogin = () => {
  const dispatch = useDispatch();

  const demoLogin = (e) => {
    e.preventDefault();
    return dispatch(
        sessionActions.login({ credential: 'Demo-lition', password: 'password' })
    )
};

  return (
    <>
      <button onClick={demoLogin}>Demo Login</button>
    </>
    );
};

export default DemoUserLogin;