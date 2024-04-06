import createError from "http-errors"
import cors from "cors"
import cookieParser from "cookie-parser";
import express from "express"

// dirname fix because i am lazy
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// === config server ===
var app = express();

// view engine setup
app.set('views', `${__dirname}/views`);
app.set('view engine', 'jade');
app.use(express.static(`${__dirname}/views`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// === config routes ===
import { router as indexRouter } from './routes/index.js';
app.use('/', indexRouter);

import { router as usersRouter } from './routes/users.js';
app.use('/users', usersRouter);

// === view engine setup ===
app.set('views', `${__dirname}/views`);
app.set('view engine', 'jade');
app.use(express.static(`${__dirname}/views`));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log(err)
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export { app }

