const initialState = {
    language: 'fr',
    logged: false,
    token: undefined,
    email: undefined,
    username: undefined
};

const base = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST':
        	console.log('test');
            return { ...state, email: 'test' };
        // case 'SAVE_AUTH_TOKEN':
        // 	console.log('save auth')
        //     const { token } = action.payload;
        //     return { ...state, token };
	    case 'SET_LANGUAGE':
		    const { language } = action.payload;
		    return { ...state, language };
        case 'SET_LOGGED':
            const { logged } = action.payload;
            return { ...state, logged };
        case 'SET_USER':
            const { email, username, token } = action.payload;
            return { ...state, email, username, token };
        case 'SET_SUBSCRIBED':
            const { subscribed } = action.payload;
            return { ...state, subscribed };
        default:
            return state;
    }
};

export default base;