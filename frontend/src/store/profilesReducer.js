import { csrfFetch } from "./csrf";

const SET_PROFILES = 'profiles/setUsers';

const setProfiles = (users) => {
    return {
        type: SET_PROFILES,
        users,
    };
};

export const fetchProfiles = () => async (dispatch) => {
    const response = await csrfFetch('/api/users/profile');

    if (response.ok) {
        const users = await response.json();
        
        dispatch(setProfiles(users));
        return users;
    };
};

const initialState = {};

const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILES:
            let newState;
            newState = {...state};
            action.users.forEach((user) => newState[user.id] = user);
            return newState;
        default:
            return state;
    }
};

export default profilesReducer;