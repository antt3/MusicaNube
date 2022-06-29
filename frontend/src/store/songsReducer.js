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

export const writeSong = (payload) => async dispatch => {

  const response = await csrfFetch('/api/songs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const song = await response.json();
    dispatch(addSong(song));
    return song;
  }
};

export const updateSong = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/songs/${payload.song.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (response.ok) {
    const song = await response.json();
    dispatch(editSong(song));
    return song;
  }
};

export const removeSong = (songId) => async dispatch => {
  const response = await csrfFetch (`/api/songs/${songId.id}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    const song = await response.json();
    dispatch(deleteSong(song))
    return song;
  }
};

const initialState = {};

const songReducer = (state = initialState, action) => {
    let newState;
  
    switch (action.type) {
      case LOAD_SONGS: 
          newState = {...state};
          action.songs.forEach((song) => newState[song.id] = song);
          return newState
      case ADD_SONG:
          newState = {...state}
          newState = { ...state, [action.song.id]: action.song };
          return newState
      case EDIT_SONG:
          newState = {...state}
          return { ...state, [ action.song.id ]: action.song };
      case DELETE_SONG:
          newState = { ...state };
          delete newState[action.song.id];
          return newState;
    default:
        return state;
    }
};
      
export default songReducer;