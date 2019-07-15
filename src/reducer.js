const initialState = {
    token: undefined,
    email: undefined,
    username: undefined,
    language: 'fr',
    logged: false
};

const base = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_AUTH_TOKEN':
            const { token } = action.payload;
            return { ...state, token };
        case 'SET_LOGGED':
            const { logged } = action.payload;
            return { ...state, logged };
        case 'SET_LANGUAGE':
            const { language } = action.payload;
            return { ...state, language };
        case 'SET_USER':
            const { email, username } = action.payload;
            return { ...state, email, username };
        default:
            return state;
    }
};

export default base;
