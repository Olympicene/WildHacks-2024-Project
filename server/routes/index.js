import express from "express"
import pkg from 'express-openid-connect';
const { requiresAuth, attemptSilentLogin } = pkg;
var router = express.Router();

// Test Page
router.get('/test', requiresAuth(), (req, res) => {
    res.status(200).json({
      status: "success",
      data: [],
      message: "You are successfully connected to our API!",
    })
});

// OAuth Login
router.get('/login', (req, res) => {
  res.oidc.login();
});

// OAuth Callback
router.post('/callback', (req, res) => {
  res.status(200).json({
    status: "success",
    data: [],
    message: "Welcome to our API homepage!",
  })
});


export {router}