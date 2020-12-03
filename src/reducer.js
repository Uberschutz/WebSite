const initialState = {
    language: 'fr',
    logged: false,
    //token: undefined, // should be replaced by hidden token or cookie/session
    acceptedRGPD: false,
    licence: null
    // email: undefined,
    // lastname: undefined,
	// firstname: undefined,
	// subscribed: false,
	// newsletter: false
};

const base = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST':
        	console.log('test');
            return { ...state, email: 'test' };
	    case 'SET_LANGUAGE':
		    const { language } = action.payload;
		    return { ...state, language };
        case 'SET_LOGGED':
            const { logged } = action.payload;
            return { ...state, logged };
        // case 'SET_AUTH_TOKEN':
        //     const { token } = action.payload;
        //     return { ...state, token };
        case 'SET_USER':
            const { email, lastname, firstname } = action.payload;
            return { ...state, email, lastname, firstname };
        case 'RGPD':
            const {acceptedRGPD} = action.payload;
            return {...state, acceptedRGPD};
        case 'SET_LICENCE':
            const {licence} = action.payload;
            return {...state, licence};
        // case 'SET_SUBSCRIBED':
        //     const { subscribed } = action.payload;
        //     return { ...state, subscribed };
	    // case 'SET_NEWSLETTER':
		//     const { newsletter } = action.payload;
		//     return { ...state, newsletter };
        default:
            return state;
    }
};

export default base;
