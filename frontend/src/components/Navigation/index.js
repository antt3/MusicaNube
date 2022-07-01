import React from 'react';

import './Navigation.css';

import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import DemoUserLogin from './DemoUserLogin';
import SongFormModal from '../SongFormModal';

function Navigation({ isLoaded, sessionUser }){
  
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
        <div>
            <NavLink exact to="/">Home</NavLink>
            {isLoaded && sessionLinks}
        </div>
    );
}

export default Navigation;