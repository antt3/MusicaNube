import React from "react";

import { Redirect } from "react-router-dom";

import AllSongs from "../AllSongs";

import './HomePage.css';

const HomePage = ({ sessionUser, songs }) => {

    if (!sessionUser) return <Redirect to="/splash" />;

    return (
        <div>
            <h1>Working on displaying songs...</h1>
            <AllSongs sessionUser={sessionUser} songs={songs} />
        </div>
    );
};

export default HomePage;