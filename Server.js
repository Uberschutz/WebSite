const axios = require('axios');
// const credentials = require('./credentials.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use( express.static(path.resolve( __dirname, "./build" ) ) );

app.post('/subscribe_newsletter', (req, res) => {
	axios.post('http://mail_server:8082/subscribe_newsletter', {
		email: req.body.email,
		name: req.body.name
	}).then(response => {
		console.log(response);
		res.send(response);
	}).catch(err => {
		console.log(err);
		res.send(err);
	});
});

// app.get('*', (req, res) => {
// 	res.send();
// });

app.listen(8080, () =>
	console.log('Proxy server running on 8081')
);
