import { csrfFetch } from "./csrf";

const LOAD_PLAYLIST_SONGS = 'playlistSongs/LOAD_PLAYLIST_SONGS'
const ADD_PLAYLIST_SONG = 'playlistSongs/ADD_PLAYLIST_SONG'
const DELETE_PLAYLIST_SONG = 'playlistSongs/DELETE_PLAYLIST_SONG'

const loadPlaylistSongs = (playlistSongs) => {
    return {
        type: LOAD_PLAYLIST_SONGS,
        playlistSongs
    }
}

const addPlaylistSong = (playlistSong) => {
    return {
        type: ADD_PLAYLIST_SONG,
        playlistSong
    }
}

const deletePlaylistSong = (playlistSong) => {
    return {
        type: DELETE_PLAYLIST_SONG,
        playlistSong
    }
}

export const fetchPlaylistSongs = () => async (dispatch) => {
    const response = await csrfFetch('/api/playlist-songs');
    if (response.ok) {
        const playlistSongs = await response.json();
        dispatch(loadPlaylistSongs(playlistSongs));
        return response;
    }
}

export const writePlaylistSong = (playlistSong) => async (dispatch) => {
    const response = await csrfFetch('/api/playlist-songs', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(playlistSong)
    });
    if(response.ok) {
        const playlistSong = await response.json();
        dispatch(addPlaylistSong(playlistSong));
        return response;
    }
}

export const removePlaylistSong = (playlistSong) => async (dispatch) => {
    const response = await csrfFetch(`/api/playlist-songs/${playlistSong.id}`, {
        method: "DELETE"
    })
    if (response.ok) {
        const playlistSong = await response.json();
        dispatch(deletePlaylistSong(playlistSong))
        return true;
    }
};

const initialState = {};

const playlistSongsReducer = (state = initialState, action) => {
    let newState;
    
    switch (action.type) {
        case LOAD_PLAYLIST_SONGS:
            newState = {...state};
            action.playlistSongs.forEach((playlistSong) => newState[playlistSong.id] = playlistSong)
            return newState;
        
        case ADD_PLAYLIST_SONG:
            newState = {...state};
            newState[action.playlistSong.id] = action.playlistSong
            return newState;
        
        case DELETE_PLAYLIST_SONG:
            newState = {...state};
            delete newState[action.playlistSong]
            return newState
        
        default:
            return state;
      
    }
}

export default playlistSongsReducer;