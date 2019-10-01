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
	axios.post('http://93.118.34.39:5412/collect', {
		token: 'EEB4D392E3564E922BC6479EFCE49',
		type: 'text'
	}, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).then(response => {
		console.log(response);
		res.send('ok');
	}).catch(err => {
		console.log(err);
		res.status(500).send('ko');
	})
});

app.post('/subscribe_newsletter', (req, res) => {
	// console.log(req.body, req.data);
	axios.post('http://user_server:8083/subscribe_newsletter', {
		email: req.body.email,
		name: req.body.name
	}).then(response => {
		console.log(response);
		res.send(response);
	}).catch(err => {
		console.log(err);
		res.status(500).send(err);
	});
});

app.post('/register', (req, res) => {
	axios.post('http://user_server:8083/register', {
		email: req.body.email,
		passwd: req.body.passwd,
		name: req.body.name
	}).then(response => {
		console.log(response);
		res.send(response);
	}).catch(err => {
		console.log(err);
		res.status(500).send(err);
	});
})

app.post('/verifyaccount', (req, res) => {
	axios.post('http://user_server:8083/verifyaccount', {
		id: req.body.id
	}).then(response => {
		console.log(response);
		res.send(response);
	}).catch(err => {
		console.log(err);
		res.status(500).send(err);
	});
});

app.post('/connect', (req, res) => {
	axios.post('http://user_server:8083/connect', {
		email: req.body.email,
		passwd: req.body.passwd
	}).then(response => {
		console.log(response);
		res.send(response.data);
	}).catch(err => {
		console.log(err);
		res.status(500).send(err);
	});
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve( __dirname, "./build/index.html" ));
});

app.listen(8080, () =>
	console.log('Proxy server running on 8081')
);
