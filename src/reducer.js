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
        case 'SAVE_AUTH_TOKEN':
        	console.log('save auth')
            const { token } = action.payload;
            return { ...state, token };
	    case 'SET_LANGUAGE':
	    	console.log('here', action.payload);
		    const { language } = action.payload;
		    return { ...state, language };
        /*case 'SET_LOGGED':
            const { logged } = action.payload;
            return { ...state, logged };
        case 'SET_USER':
            const { email, username } = action.payload;
            return { ...state, email, username };*/
        default:
        	console.log('here default', state);
            return state;
    }
};

export default base;

// const initialState = {
// 	email: '',
// 	token: undefined,
// 	services: undefined,
// }
//
// const base = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'TEST':
// 			return { ...state, email: 'test' }
//
// 		case 'BASE_SAVE_AUTH_TOKEN':
// 			const { token, email } = action.payload
//
// 			return { ...state, token, email }
//
// 		case 'BASE_SAVE_SERVICES_DATA':
// 			const { data } = action.payload
// 			const { services } = data
//
// 			return { ...state, services }
//
// 		default:
// 			return state
// 	}
// }
//
// export default base
