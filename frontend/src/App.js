import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import * as songsReducer from "./store/songsReducer";
import * as commentsReducer from "./store/commentsReducer";
import * as profilesReducer from "./store/profilesReducer";
import * as playlistsReducer from "./store/playlistsReducer";

import SplashPage from "./components/SplashPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage.js";
import AllSongs from "./components/AllSongs";
import SingleSong from "./components/SingleSong";
import ProfilePage from "./components/ProfilePage";

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const songs = useSelector(state => state.songsState);
    const comments = useSelector(state => state.commentsState);
    const profiles = useSelector(state => state.profilesState);

    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    useEffect(() => {
        dispatch(songsReducer.fetchSongs());
        dispatch(commentsReducer.fetchComments());
        dispatch(profilesReducer.fetchProfiles());
        dispatch(playlistsReducer.fetchPlaylists());
    }, [dispatch]);
  
    return (
        <div className='app'>
            <Navigation isLoaded={isLoaded} sessionUser={sessionUser} />
            {isLoaded && (
                <Switch>
                    <Route exact path='/'>
                        <HomePage sessionUser={sessionUser} songs={songs} />
                    </Route>
                    <Route exact path='/songs'>
                        <AllSongs sessionUser={sessionUser} songs={songs} />
                    </Route>
                    <Route exact path='/songs/:id'>
                        <SingleSong sessionUser={sessionUser} songs={songs} comments={comments} />
                    </Route>
                    <Route exact path='/profiles/:id'>
                        <ProfilePage sessionUser={sessionUser} songs={songs} profiles={profiles} />
                    </Route>
                    <Route exact path='/splash'>
                        <SplashPage sessionUser={sessionUser} />
                    </Route>
                    <Route>
                        <h1 className="pnf">Page Not Found</h1>
                    </Route>
                </Switch>
            )}
        </div>
    );
}

export default App;