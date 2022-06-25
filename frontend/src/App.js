import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SplashPage from "./components/SplashPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage.js";
import AllSongs from "./components/AllSongs";

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    const songsState = useSelector(state => state.session.songs);

    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);
  
    return (
        <>
            <Navigation isLoaded={isLoaded} sessionUser={sessionUser} />
            {isLoaded && (
                <Switch>
                    <Route exact path='/'>
                        <HomePage sessionUser={sessionUser} />
                    </Route>
                    <Route exact path='/posts'>
                        <AllSongs sessionUser={sessionUser} songsState={songsState} />
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