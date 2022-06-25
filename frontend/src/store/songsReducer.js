import { csrfFetch } from "./csrf";

const LOAD_SONGS = 'songs/loadSongs'
const ADD_SONG = 'songs/addSong';
const EDIT_SONG = 'songs/editsong';
const DELETE_SONG = 'songs/deleteSong'

export const loadSongs = (songs) => {
  return {
    type: LOAD_SONGS,
    songs
  };
};

export const addSong = (song) => {
  return {
    type: ADD_SONG,
    song
  };
};

export const editSong = (song) => {
  return {
    type: EDIT_SONG,
    song
  };
};

export const deleteSong = (song) => {
  return {
    type: DELETE_SONG,
    song
  };
};

export const fetchSongs = () => async (dispatch) => {
	const response = await csrfFetch('/api/songs');

	if (response.ok) {
		const data = await response.json();

		dispatch(loadSongs(data));
		return data;
  };
};

const initialState = {};

const songReducer = (state = initialState, action) => {
    let newState;
  
    switch (action.type) {
      case LOAD_SONGS: 
        newState = {...state};
        action.songs.forEach((song) => newState[song.id] = song);
        return newState
    default:
        return state;
    }
};
      
export default songReducer;