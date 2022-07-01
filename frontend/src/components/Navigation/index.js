import React from 'react';
import { useHistory } from 'react-router-dom';

import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import DemoUserLogin from './DemoUserLogin';
import SongFormModal from '../SongFormModal';

import './Navigation.css';

function Navigation({ isLoaded, sessionUser }){
    const history = useHistory();

    const onClick = (e) => {
        e.stopPropagation();

        return history.push('/')
    }
  
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <SongFormModal sessionUser={sessionUser} />
                <ProfileButton user={sessionUser} />
            </>
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal />
                <DemoUserLogin />
            </>
        );
    }
  
    return (
        <div className='nav'>
            <p onClick={onClick} className='homeNav'>Home</p>
            {isLoaded && sessionLinks}
        </div>
    );
}

export default Navigation;