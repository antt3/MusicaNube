import React from 'react';
import { Redirect } from 'react-router-dom';

import './SplashPage.css';

const SplashPage = ({ sessionUser }) => {

  if (sessionUser) return <Redirect to="/" />;

  return (
    <div>
      <h1>Hi, Welcome to MusicaNube!</h1>
      <div>
          <p>You can sign in, create a new account, or just log in as a demo user with the button above.</p>
      </div>
      <div>
          <p></p>
      </div>
    </div>
    );
};

export default SplashPage;