const axios = require('axios');
const credentials = require('./credentials.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use( express.static(path.resolve( __dirname, "./build" ) ) );

var server_url = "user_server";
if (process.env.NODE_ENV && process.env.NODE_ENV === 'dev') {
	server_url = credentials.vm_ip;
}

app.post('/get_data', (req, res) => {
	let data = `token=${credentials.token}&type=text`;
	if (req.body.discordId) {
		data += `&userId=${req.body.discordId}`
	}
	if (req.body.service) {
		data += `&service=${req.body.service}`
	}
	axios.post(`${credentials.api_ip}/collect`, data, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).then(response => {
		res.send(response.data.flagsPercentage);
	}).catch(err => {
		res.status(err.response.status).send(err.response.data);
	});
});

app.post('/subscribe_newsletter', async (req, res) => {
	// console.log(req.body, req.data);
	let result = await axios.post(`http://${server_url}:8081/subscribe_newsletter`, {
		email: req.body.email,
		name: req.body.name
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.post('/unsubscribe_newsletter', async (req, res) => {
	let result = axios.post(`http://${server_url}:8081/unsubscribe_newsletter`, {
		email: req.body.email,
		name: req.body.name
	}, {
		headers: {
			'x-access-token': req.headers['x-access-token']
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});


app.post('/register', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/register`, {
		email: req.body.email,
		passwd: req.body.passwd,
		lastname: req.body.lastname,
		firstname: req.body.firstname
	}).then(response => response).catch(err => err.response);
	forward_response(res, result)
});

app.post('/verifyaccount', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/verifyaccount`, {
		id: req.body.id
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.post('/connect', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/connect`, {
		email: req.body.email,
		passwd: req.body.passwd
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.post('/children', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/children`, {
		action: req.body.action,
		name: req.body.name,
		newName: (req.body.newName ? req.body.newName : ''),
		age: req.body.age,
		options: req.body.options,
		discordId: req.body.discordId
	}, {
		headers: {
			'x-access-token': req.headers['x-access-token']
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.post('/rename', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/rename`, {
		key: req.body.key,
		value: req.body.value
	}, {
		headers: {
			'x-access-token': req.headers['x-access-token']
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.post('/delete_account', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/delete_account`, '', {
		headers: {
			'x-access-token': req.headers['x-access-token']
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.get('/gdpr', async (req, res) => {
	let result = await axios.get(`http://${server_url}:8081/gdpr`, {
		headers: {
			'x-access-token': req.headers['x-access-token']
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.get('/get_available_licences', async (req, res) => {
	let result = await axios.get(`http://${server_url}:8081/get_available_licences`,{
		headers: {
			'x-access-token': req.headers['x-access-token']
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.get('/get_subscription', async (req, res) => {
	let result = await axios.get(`http://${server_url}:8081/get_subscription`,{
		headers: {
			'x-access-token': req.headers['x-access-token']
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.post('/subscribe', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/subscribe`, {
		subscription: req.body.subscription
	}, {
		headers: {
			'x-access-token': req.headers['x-access-token']
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.post('/unsubscribe', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/unsubscribe`, '', {
		headers: {
			'x-access-token': req.headers['x-access-token']
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

// app.post('/set_subscription', (req, res) => {
// 	axios.post(`http://${server_url}:8081/set_subscription`, {
// 		subscription: req.body.subscription
// 	}, {
// 		headers: {
// 			'x-access-token': req.headers['x-access-token']
// 		}
// 	}).then(response => {
// 		console.log(response.data);
// 		res.send(response.data);
// 	}).catch(err => {
// 		console.log(err);
// 		res.status(500).send(`An error occurred: ${err.response.data}`);
// 	})
// });

app.get('*', (req, res) => {
	res.sendFile(path.resolve( __dirname, "./build/index.html" ));
});

function forward_response(res, promise) {
	/*console.log({
		method: promise.request.method,
		url: promise.request.res.responseUrl,
		status: promise.status,
		statusText: promise.statusText,
		data: promise.data
	});*/
	res.status(promise.status).send(promise.data);
}

app.listen(8080, () =>
	console.log('Server listening on 8080')
);
