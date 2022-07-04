import React from 'react';
import { Redirect } from 'react-router-dom';

import './SplashPage.css';

const SplashPage = ({ sessionUser }) => {

    if (sessionUser) return <Redirect to="/" />;
  
    return (
        <div className='splash'>
            <h1 className='splash_h1'>Hi, welcome to MusicaNube!</h1>
            <p className='splash_p'>You can sign in, create a new account, or just log in as a demo user with the button above</p>
            <a className='splash_link' href='https://github.com/antt3'>Here's my Github</a>
        </div>
    );
};

export default SplashPage;