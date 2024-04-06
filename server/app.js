import createError from "http-errors"
import cors from "cors"
import cookieParser from "cookie-parser";
import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import pkg from 'express-openid-connect';
const { auth } = pkg;

dotenv.config();

// dirname fix because i am lazy
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// === config server ===
var app = express();
const config = {
  authRequired: false,
  auth0Logout: true
};

const port = process.env.PORT || 3000;
if (!config.baseURL && !process.env.BASE_URL && process.env.PORT && process.env.NODE_ENV !== 'production') {
  config.baseURL = `https://helping-widely-foal.ngrok-free.app/v1`;
}

app.use(auth(config));

// === connect to database ===
// setup
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.URI)
  .then(console.log("Connected to database")) // we listen in www.js
  .catch((err) => console.log(err))

// Middleware to make the `user` object available for all views
app.use((req, res, next) => {
  res.locals.user = req.oidc.user;
  next();
});

// view engine setup
app.set('views', `${__dirname}/views`);
app.set('view engine', 'jade');
app.use(express.static(`${__dirname}/views`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// === config routes ===
import { router as indexRouter } from './routes/index.js';
app.use('/v1', indexRouter);

// === view engine setup ===
app.set('views', `${__dirname}/views`);
app.set('view engine', 'jade');
app.use(express.static(`${__dirname}/views`));

// catch 404 and forward to error handler
app.use( (req, res, next) => {
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
