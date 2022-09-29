import { csrfFetch } from "./csrf";

const LOAD_PLAYLISTS = 'playlists/loadPlaylists'
const ADD_PLAYLIST = 'playlists/addPlaylist';
const EDIT_PLAYLIST = 'playlists/editPlaylist';
const DELETE_PLAYLIST = 'playlists/deletePlaylist'

export const loadPlaylists = (playlists) => {
    return {
        type: LOAD_PLAYLISTS,
        playlists
    };
};

export const addPlaylist = (playlist) => {
    return {
        type: ADD_PLAYLIST,
        playlist
    };
};

export const editPlaylist = (playlist) => {
    return {
        type: EDIT_PLAYLIST,
        playlist
    };
};

export const deletePlaylist = (playlist) => {
    return {
        type: DELETE_PLAYLIST,
        playlist
    };
};

export const fetchPlaylists = () => async (dispatch) => {
	const response = await csrfFetch('/api/playlists');

	if (response.ok) {
		const playlists = await response.json();
		dispatch(loadPlaylists(playlists));
		return playlists;
    };
};

export const writePlaylist = (payload) => async dispatch => {

    const response = await csrfFetch('/api/playlists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const playlist = await response.json();
        dispatch(addPlaylist(playlist));
        return playlist;
    }
};

export const updatePlaylist = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/playlists/${payload.playlist.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const playlist = await response.json();
        dispatch(editPlaylist(playlist));
        return playlist;
    }
};

export const removePlaylist = (playlist) => async dispatch => {
    const response = await csrfFetch (`/api/playlists/${playlist.id}`, {
        method: 'DELETE',
    })
    if (response.ok) {
        const playlist = await response.json();
        dispatch(deletePlaylist(playlist))
        return true;
    }
};

const initialState = {};

const playlistsReducer = (state = initialState, action) => {
    let newState;
  
    switch (action.type) {
        case LOAD_PLAYLISTS:
            newState = {...state};
            action.playlists.forEach((playlist) => newState[playlist.id] = playlist)
            return newState
        case ADD_PLAYLIST:
            newState = {...state};
            newState = { ...state, [action.playlist.id]: action.playlist };
            return newState;
        case EDIT_PLAYLIST:
            newState = {...state};
            return { ...state, [ action.playlist.id ]: action.playlist };
        case DELETE_PLAYLIST:
            newState = { ...state };
            delete newState[action.playlist];
            return newState;
    default:
        return state;
    }
};
      
export default playlistsReducer;