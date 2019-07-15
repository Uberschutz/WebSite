

export const saveAuthToken = (token, email, username) => ({
    type: 'SAVE_AUTH_TOKEN',
    payload: {
        token,
        email,
        username
    }
});

export const setUser = (email, username) => ({
    type: 'SET_USER',
    payload: {
        email,
        username
    }
});

export const setLogged = (state) => ({
    type: 'SET_LOGGED',
    payload: {
        state
    }
});

export const setLanguage = (language) => ({
   type: 'SET_LANGUAGE',
   payload: {
       language
   }
});