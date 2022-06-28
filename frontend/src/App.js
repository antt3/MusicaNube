import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import * as songsActions from "./store/songsReducer";

import SplashPage from "./components/SplashPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage.js";
import AllSongs from "./components/AllSongs";

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const songs = useSelector(state => state.songsState);

    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    useEffect(() => {
        dispatch(songsActions.fetchSongs());
    }, [dispatch]);
  
    return (
        <>
            <Navigation isLoaded={isLoaded} sessionUser={sessionUser} />
            {isLoaded && (
                <Switch>
                    <Route exact path='/'>
                        <HomePage sessionUser={sessionUser} songs={songs} />
                    </Route>
                    <Route exact path='/songs'>
                        <AllSongs sessionUser={sessionUser} songs={songs} />
                    </Route>
                    
                    <Route exact path='/splash'>
                        <SplashPage sessionUser={sessionUser} />
                    </Route>
                    <Route>
                        <h1>Page Not Found</h1>
                    </Route>
                </Switch>
            )}
        </>
    );
}

export default App;