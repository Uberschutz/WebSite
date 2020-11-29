const cookieSession = require('cookie-session');
const document = require("docx").Document;
const pack = require("docx").Packer;
const paragraph = require("docx").Paragraph;
const textRun = require("docx").TextRun;

const axios = require('axios');
const credentials = require('./credentials.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 8080

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieSession({
	name: 'token',
	// maxAge: 2 * 60 * 1000,
	maxAge: 365 * 24 * 60 * 60 * 1000,
	httpOnly: false,
	signed: true,
	keys: [credentials.session.cookieKey],
	sameSite: true
}));

app.use( express.static(path.resolve( __dirname, "./build" ) ) );

var server_url = "user_server";
if (process.env.NODE_ENV && process.env.NODE_ENV === 'dev') {
	server_url = credentials.vm_ip;
}

// app.post('/google_sign_up', async (req, res) => {
// 	let result = await axios.post(`http://${server_url}:8081/google_sign_up`, req.body)
// 		.then(response => response).catch(err => err.response);
// 	forward_response(res, result);
// })

app.post('/google_sign_in', async (req, res) => {
	axios.post(`http://${server_url}:8081/google_sign_in`, req.body)
		.then(response => {
			if (response.data) {
				req.session.token = response.data.token;
				res.status(response.status).send(response.data);
			} else {
				res.end();
			}
		}).catch(err => {
		console.log(err);
		if (err.response.status === 500) {
			res.status(500).send('Internal server error');
		} else {
			res.status(err.response.status).send(err.response.data);
		}
	});
})

app.post('/get_data', async (req, res) => {
	const data = { userId: req.body.discordId, services: req.body.services.join(';') };
	const { data: { token } } = await axios.post(`${credentials.api_ip}/login`);
	axios.post(`${credentials.api_ip}/collect`, data, {
		headers: {
			'Content-Type': 'application/json',
			'Token': token
		}
	}).then(response => {
		res.send(response.data.datas);
	}).catch(err => {
		if (err.response)
			res.status(err.response.status).send(err.response.data.message);
		else
			res.status(500).send('Internal server error');
	});
});

app.get('/disconnect', (req, res) => {
	req.session = null;
	// req.cache = null;
	// req.cookies = null;
	res.end();
})

app.get('/get_auth_user', (req, res) => {
	axios.get(`http://${server_url}:8081/get_auth_user`, {
		// headers: req.headers
		headers: {
			'x-access-token': req.session.token
		}
	}).then(response => {
		res.send(response.data);
	}).catch(err => {
		res.status(err.response?.status || 500).send(err.response?.data || "Internal server error");
	})
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
	let result = await axios.post(`http://${server_url}:8081/unsubscribe_newsletter`, {
		email: req.body.email,
		name: req.body.name
	}, {
		headers: {
			'x-access-token': req.session.token
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.get('/options', async (req, res) => {
	let result = await axios.get(`http://${server_url}:8081/options`, {
		headers: {
			'x-access-token': req.session.token
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
	axios.post(`http://${server_url}:8081/connect`, {
		email: req.body.email,
		passwd: req.body.passwd
	}).then(response => {
		req.session.token = response.data.token;
		res.status(response.status).send(response.data);
	}).catch(err => {
		console.log(err);
		if (err.response.status === 500) {
			res.status(500).send('Internal server error');
		} else {
			res.status(err.response.status).send(err.response.data);
		}
	});
	// forward_response(res, result);
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
			'x-access-token': req.session.token
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
			'x-access-token': req.session.token
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.post('/change_email', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/change_email`, req.body, {
		headers: {
			'x-access-token': req.session.token
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
})

app.post('/email', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/email`, req.body, {
		headers: {
			'x-access-token': req.session.token
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
})

app.post('/forgot_password', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/forgot_password`, req.body)
		.then(response => response).catch(err => err.response);
	forward_response(res, result);
})

app.post('/change_password', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/change_password`, req.body, {
		headers: {
			'x-access-token': req.session.token
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
})

app.post('/delete_account', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/delete_account`, '', {
		headers: {
			'x-access-token': req.session.token
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.get('/gdpr', async (req, res) => {
	axios.get(`http://${server_url}:8081/gdpr`, {
		headers: {
			'x-access-token': req.session.token
		}
	}).then(async response => {
		console.log(response.data);
		let lines = [];
		for (let [key, value] of Object.entries(response.data)) {
			if (key === 'creation_date') {
				let date = new Date(value);
				lines.push(new paragraph({
					children: [
						new textRun(`${key}: ${date.toString()}`)
					]
				}));
			} else if (key === 'childrens') {
				value.forEach((c, i) => {
					lines.push(new paragraph({
						children: [
							new textRun(`child ${i}: first name: ${c.name}, age: ${c.age} years`)
						]
					}));
				});
			} else {
				lines.push(new paragraph({
					children: [
						new textRun(`${key}: ${value}`)
					]
				}));
			}
		}
		const doc = new document();
		doc.addSection({
			properties: {},
			children: lines,
		});
		const b64string = await pack.toBase64String(doc);
		res.setHeader("Content-Disposition", "attachment; filename=data.docx");
		res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
		const buffer = Buffer.from(b64string, "base64");
		 res.send(buffer);
	}).catch(err => {
		if (err.response)
			res.status(err.response.status).send(err.response.data);
		else
			res.status(500).send('Internal server error');
	});
});

app.get('/get_available_licences', async (req, res) => {
	let result = await axios.get(`http://${server_url}:8081/get_available_licences`)
		.then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.get('/get_subscription', async (req, res) => {
	let result = await axios.get(`http://${server_url}:8081/get_subscription`,{
		headers: {
			'x-access-token': req.session.token
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.post('/subscribe', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/subscribe`, {
		subscription: req.body.subscription
	}, {
		headers: {
			'x-access-token': req.session.token
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

app.post('/unsubscribe', async (req, res) => {
	let result = await axios.post(`http://${server_url}:8081/unsubscribe`, '', {
		headers: {
			'x-access-token': req.session.token
		}
	}).then(response => response).catch(err => err.response);
	forward_response(res, result);
});

// app.post('/set_subscription', (req, res) => {
// 	axios.post(`http://${server_url}:8081/set_subscription`, {
// 		subscription: req.body.subscription
// 	}, {
// 		headers: {
// 			'x-access-token': req.session.token
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
	if (promise)
		res.status(promise.status).send(promise.data);
	else
		res.status(500).send('Internal server error');
}

app.listen(PORT, () =>
	console.log(`Server listening on ${PORT}`)
);
