import React from "react";

import { Redirect } from "react-router-dom";

import AllSongs from "../AllSongs";

import './HomePage.css';

const HomePage = ({ sessionUser, songs }) => {

    console.log(songs);

    if (!sessionUser) return <Redirect to="/splash" />;

    return (
        <div>
            <AllSongs sessionUser={sessionUser} songs={songs} />
        </div>
    );
};

export default HomePage;