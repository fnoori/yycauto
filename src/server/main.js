require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const http = require('http');
const server = http.createServer(app);

const userRoutes = require('./api/routes/user');

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true })
.then().catch(err => {
	console.log('Mongo Connection Error', err);
});

// enable bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure routes
app.use('/users', userRoutes);

// error handling
app.use((req, res, next) => {
	const error = new Error('Route Not Found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

server.listen(3000, () => {
  console.log(`listening on port 3000`);
});

module.exports = app;
