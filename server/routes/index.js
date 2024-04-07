import express from "express"
import pkg from 'express-openid-connect';
const { requiresAuth, attemptSilentLogin } = pkg;
var router = express.Router();

// // Test Page
// router.get('/test', (req, res) => {
//   console.log(req.body)
//   if (req.oidc.isAuthenticated()) {
//     // User is authenticated, render profile page
//     res.send(`Welcome, ${req.oidc.user.name}!`);
//   } else {
//     // User is not authenticated, redirect to login page
//     res.redirect('YOU SUCK');
//   }
// });

// // OAuth Login
// router.get('/login', (req, res) => {
//   res.oidc.login();
// });

// router.get('/status', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// })

// router.get('/profile', requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });

// // OAuth Logout
// router.get('/logout', (req, res) => {
//   res.oidc.logout({ returnTo: '/callback' })
// });

// // OAuth Callback
// router.post('/callback', (req, res) => {

//   res.status(200).json({
//     status: "success",
//     message: "You have successfully logged in.",
//   })
// });

/* GET home page. */
router.get('/', (req, res) => {
  try {
    // res.render('index', { title: 'Express' });
    res.status(200).json({
      status: "success",
      data: [],
      message: "Welcome to our API homepage!",
    })

  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error"
    })
  }
});

router.get('/user', Verify, (req, res) => {  
  res.status(200).json({
    status: "Success",
    message: "Welcome to your Dashboard!",
    data: [req.user],
  })
})

export {router}