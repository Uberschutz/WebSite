const axios = require('axios');
// const credentials = require('./credentials.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use( express.static(path.resolve( __dirname, "./build" ) ) );

app.post('/get_data', (req, res) => {
	axios.post('http://93.118.34.39:5412/collect', "token=EEB4D392E3564E922BC6479EFCE49&type=text", {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).then(response => {
		res.send(response.data.flagsPercentage);
	}).catch(err => {
		console.log(err);
		res.status(500).send('ko');
	})
});

app.post('/subscribe_newsletter', (req, res) => {
	// console.log(req.body, req.data);
	axios.post('http://user_server:8081/subscribe_newsletter', {
		email: req.body.email,
		name: req.body.name
	}).then(response => {
		console.log(response.data);
		res.send(response.data);
	}).catch(err => {
		console.log(err);
		res.status(500).send(err.response.statusText);
	});
});

app.post('/register', (req, res) => {
	axios.post('http://user_server:8081/register', {
		email: req.body.email,
		passwd: req.body.passwd,
		name: req.body.name
	}).then(response => {
		console.log(response.data);
		res.send(response.data);
	}).catch(err => {
		console.log(err);
		res.status(500).send(err.response.statusText);
	});
});

app.post('/verifyaccount', (req, res) => {
	axios.post('http://user_server:8081/verifyaccount', {
		id: req.body.id
	}).then(response => {
		console.log(response.data);
		res.send(response.data);
	}).catch(err => {
		console.log(err);
		res.status(500).send(err);
	});
});

app.post('/connect', (req, res) => {
	axios.post('http://user_server:8081/connect', {
		email: req.body.email,
		passwd: req.body.passwd
	}).then(response => {
		console.log(response.data);
		res.send(response.data);
	}).catch(err => {
		console.log(err);
		res.status(500).send(err);
	});
});

app.post('/children', (req, res) => {
	axios.post('http://user_server:8081/children', {
		action: req.body.action,
		name: req.body.name,
		newName: (req.body.newName ? req.body.newName : ''),
		age: req.body.age,
		options: req.body.options
	}, {
		headers: {
			'x-access-token': req.headers['x-access-token']
		}
	}).then(response => {
		console.log(response.data);
		res.send(response.data);
	}).catch(err => {
		console.log(err);
		res.status(500).send(`An error occurred: ${err.response.statusText}`);
	})
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve( __dirname, "./build/index.html" ));
});

app.listen(8080, () =>
	console.log('Server listening on 8080')
);
