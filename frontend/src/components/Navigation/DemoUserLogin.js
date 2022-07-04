import React from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';

const DemoUserLogin = () => {
  const dispatch = useDispatch();

  const demoLogin = (e) => {
    e.stopPropagation();

    return dispatch(
        sessionActions.login({ credential: 'Demo-lition', password: 'password' })
    )
};

  return (
    <>
      <p className='demoLoginNav' onClick={demoLogin}>Demo Login</p>
    </>
    );
};

export default DemoUserLogin;