import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
  
    const logout = (e) => {
        e.stopPropagation();
        dispatch(sessionActions.logout());
    };
  
    return (
        <>
            <p className='profileNav' onClick={()=> history.push(`/profiles/${user.id}`)}>Profile</p>
            <p className='logoutNav' onClick={logout}>Log Out</p>
        </>
    );
}

export default ProfileButton;