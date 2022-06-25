import React from "react";

import { Redirect } from "react-router-dom";

import AllSongs from "../AllSongs";

import './HomePage.css';

const HomePage = ({ sessionUser, songsState }) => {

    if (!sessionUser) return <Redirect to="/splash" />;

    return (
        <div>
            <AllSongs sessionUser={sessionUser} songsState={songsState} />
        </div>
    );
};

export default HomePage;