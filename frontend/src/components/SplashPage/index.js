import React from 'react';
import { Redirect } from 'react-router-dom';

import './SplashPage.css';

const SplashPage = ({ sessionUser }) => {

    if (sessionUser) return <Redirect to="/" />;
  
    return (
        <div className='splash'>
            <h1 className='splash_h1'>Hi, welcome to MusicaNube!</h1>
            <p className='splash_p'>You can sign in, create a new account, or just log in as a demo user with the button above to enter the site</p>
            <p className='splash_p'>Note: Due to the restrictions of the Soundcloud Music Player there is no queue,</p>
            <p className='splash_p'>so Playlists will not play and every Song must be clicked before it will play</p>
            <a className='splash_link' href='https://github.com/antt3'>Github</a><a className='splash_link' href='https://www.linkedin.com/in/anthony-t3/'>LinkedIn</a>
        </div>
    );
};

export default SplashPage;