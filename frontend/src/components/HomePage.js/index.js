import React from "react";

import { Redirect } from "react-router-dom";

const HomePage = ({ sessionUser }) => {

    if (!sessionUser) return <Redirect to="/splash" />;

    return (
        <h1>Working on homepage</h1>
    );
};

export default HomePage;