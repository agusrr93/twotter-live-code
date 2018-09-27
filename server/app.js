const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()

const usersRouter = require('./routes/users');
const tweetRouter = require('./routes/tweet')
const followingRouter = require('./routes/following')

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://agus:sedani89@ds064278.mlab.com:64278/bloggermocha', { useNewUrlParser: true })


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Connected!');
});

app.use('/users', usersRouter);
app.use('/tweet', tweetRouter)
app.use('/following', followingRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
