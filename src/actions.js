export const test = () => ({
    type: 'TEST',
})

export const setAuthToken = (token) => ({
    type: 'SET_AUTH_TOKEN',
    payload: {
        token
    }
});

export const setUser = (email, lastname) => ({
    type: 'SET_USER',
    payload: {
        email,
        lastname,
	    // firstname,
	    // token
    }
});

export const setLogged = (logged) => ({
    type: 'SET_LOGGED',
    payload: {
        logged
    }
});

export const setLanguage = (language) => ({
   type: 'SET_LANGUAGE',
   payload: {
       language
   }
});

export const setSubscribed = (subscribed) => ({
   type: 'SET_SUBSCRIBED',
   payload: {
       subscribed
   }
});

export const setNewsletter = (newsletter) => ({
	type: 'SET_NEWSLETTER',
	payload: {
		newsletter
	}
})

export const setRGPDAcceptation = (acceptedRGPD) => ({
    type: 'RGPD',
    payload: {
        acceptedRGPD
    }
})

export const setLicence = (licence) => ({
    type: 'SET_LICENCE',
    payload: {
        licence
    }
})

/*
import axios from 'axios'

export const test = () => ({
	type: 'TEST',
})

export const saveAuthToken = (token, email) => ({
	type: 'BASE_SAVE_AUTH_TOKEN',
	payload: {
		token,
		email,
	}
})

export const getServiceData = (token) => dispatch => {
	axios({
		url: 'http://localhost:8080/auth/get_services',
		headers: {
			'x-access-token': token
		},
		method: 'POST',
	}).then(response => {
		const { data } = response
		dispatch({
			type: 'BASE_SAVE_SERVICES_DATA',
			payload: {
				data,
			}
		})
	}).catch(err => console.log(err))
}

export const subscribeToService = (token, services, service, status) => dispatch => {
	const newServices = Object.keys(services).reduce((acc, curr) => {
		acc[curr] = services[curr]
		if (curr === service) {
			acc[curr].subscribed = status
		}

		return acc
	}, {})

	axios({
		url: 'http://localhost:8080/auth/set_services',
		headers: {
			'x-access-token': token,
		},
		method: 'POST',
		data: {
			services: newServices,
		},
	}).then(response => {
		const data = { services: newServices }

		dispatch({
			type: 'BASE_SAVE_SERVICES_DATA',
			payload: {
				data,
			}
		})
	}).catch(err => console.log(err))
}

export const sendServiceData = (token, services) => dispatch => {
	axios({
		url: 'http://localhost:8080/auth/set_services',
		headers: {
			'x-access-token': token
		},
		method: 'POST',
		data: {
			services,
		},
	}).then(response => {
		console.log(response)
	}).catch(err => {
		console.log(err)
	})
}

export const updateActionFill = (data) => dispatch => {
	const { token, services, serviceName, areaIdx, actionIdx, fill } = data

	const newServices = Object.keys(services).reduce((acc, curr) => {
		acc[curr] = services[curr]
		if (curr === serviceName) {
			acc[curr].area[areaIdx].action.fill = fill
		}

		return acc
	}, {})

	axios({
		url: 'http://localhost:8080/auth/set_services',
		headers: {
			'x-access-token': token,
		},
		method: 'POST',
		data: {
			services: newServices,
		},
	}).then(response => {
		const data = { services: newServices }

		dispatch({
			type: 'BASE_SAVE_SERVICES_DATA',
			payload: {
				data,
			}
		})
	}).catch(err => console.log(err))
}

export const updateFill = (data) => dispatch => {
	const { token, services, serviceName, areaIdx, reactionIdx, fill } = data

	const newServices = Object.keys(services).reduce((acc, curr) => {
		acc[curr] = services[curr]
		if (curr === serviceName) {
			acc[curr].area[areaIdx].reactions[reactionIdx].fill = fill
		}

		return acc
	}, {})

	axios({
		url: 'http://localhost:8080/auth/set_services',
		headers: {
			'x-access-token': token,
		},
		method: 'POST',
		data: {
			services: newServices,
		},
	}).then(response => {
		const data = { services: newServices }

		dispatch({
			type: 'BASE_SAVE_SERVICES_DATA',
			payload: {
				data,
			}
		})
	}).catch(err => console.log(err))
}

export const toggleAREA = (data) => dispatch => {
	const { token, services, serviceName, areaIdx, status } = data

	const newServices = Object.keys(services).reduce((acc, curr) => {
		acc[curr] = services[curr]
		if (curr === serviceName) {
			acc[curr].area[areaIdx].active = status
		}

		return acc
	}, {})

	axios({
		url: 'http://localhost:8080/auth/set_services',
		headers: {
			'x-access-token': token,
		},
		method: 'POST',
		data: {
			services: newServices,
		},
	}).then(response => {
		const data = { services: newServices }

		dispatch({
			type: 'BASE_SAVE_SERVICES_DATA',
			payload: {
				data,
			}
		})
	}).catch(err => console.log(err))
}*/
