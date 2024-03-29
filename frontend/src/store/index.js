import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import sessionReducer from './session';
import songsState from './songsReducer';
import commentsState from './commentsReducer';
import profilesState from './profilesReducer';
import playlistsState from './playlistsReducer';
import playlistSongsState from './playlistSongsReducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    playlistsState,
    playlistSongsState,
    songsState,
    commentsState,
    profilesState
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
};

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};
  
export default configureStore;