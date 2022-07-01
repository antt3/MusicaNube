import { csrfFetch } from "./csrf";

const SET_PROFILE = 'profile/setUser';

const setProfile = (user) => {
    return {
        type: SET_PROFILE,
        payload: user,
    };
};

export const fetchProfile = (id) => async (dispatch) => {
    const response = await csrfFetch('/api/session/profile', {
        method: 'POST',
        body: JSON.stringify({
            id
        }),
    });
    const user = await response.json();
    dispatch(setProfile(user));
    return user;
};

const initialState = { user: null };

const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            let newState;
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        default:
            return state;
    }
};

export default profilesReducer;